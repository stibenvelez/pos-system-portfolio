import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getSalesReportAction,
    readFiltersAction,
} from "../../redux/reports/reports.action";
import IndicatorsCards from "../../components/dashboard/IndicatorsCards";
import OptionsFilters from "../../components/dashboard/OptionsFilters";
import { AdjustmentsIcon } from "@heroicons/react/outline";
import Template from "../../components/ui/Template";
import { useSearchParams } from "react-router-dom";

const DashboardPage = () => {
    const dispatch = useDispatch();
    const filters = useSelector(({ reports }) => reports.filters);
    const [showFilters, setShowFilters] = useState(false);
    const [searchParams] = useSearchParams(filters);

    useEffect(() => {
        dispatch(getSalesReportAction(Object.fromEntries([...searchParams])));
    }, [searchParams]);

    useEffect(() => {
        readFiltersAction(Object.fromEntries([...searchParams]));
    }, [searchParams]);

    return (
        <Template
            title="Dashboard"
            description="Principales indicadores de la empresa"
        >
            
            <div className="flex flex-col gap-4">
                <div className="">
                    {showFilters ? (
                        <OptionsFilters setShowFilters={setShowFilters} />
                    ) : (
                        <button
                            className="flex items-center gap-2 px-3 py-1 text-white rounded-md cursor-pointer bg-slate-700 hover:bg-indigo-800"
                            onClick={() => setShowFilters(true)}
                        >
                            <AdjustmentsIcon className="w-5 h-5" />
                            Filtros
                        </button>
                    )}
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-8">
                    <div className="lg:col-span-10">
                        <IndicatorsCards />
                    </div>
                    <div>
                        {/* // TODO: create component FeaturedProducts */}
                        {/* <FeaturedProducts/> */}
                    </div>
                </div>
            </div>
            
        </Template>
    );
};

export default DashboardPage;
