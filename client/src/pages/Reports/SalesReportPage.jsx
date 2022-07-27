import React, { useEffect } from "react";
import IndicatorsCards from "../../components/reports/sales/IndicatorsCards";
import Template from "../../components/ui/Template";
import { useDispatch, useSelector } from "react-redux";
import OptionsFilters from "../../components/reports/OptionsFilters";
import ListReports from "../../components/reports/ListReports";
import ChartReport from "../../components/reports/ChartReport";
import { getSalesReportAction } from "../../redux/reports/reports.action";

const SalesReportPage = () => {
    const dispatch = useDispatch();
    const filters = useSelector(({ reports }) => reports.filters);

    useEffect(() => {
        const getSalesReport = async () =>
            dispatch(getSalesReportAction(filters));
        getSalesReport();
    }, [filters]);

    return (
        <Template
            title="Reporte de ventas"
            description="Genere aqui un reporte de ventas"
        >
            <div className="flex flex-col gap-4">
                <div>
                    <OptionsFilters />
                </div>
                <div>
                    <IndicatorsCards />
                </div>
                <div>
                    {/* <ChartReport/> */}
                </div>
                <div>
                    <ListReports />
                </div>
            </div>
        </Template>
    );
};

export default SalesReportPage;
