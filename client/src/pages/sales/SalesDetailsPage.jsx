import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterOptions from "../../components/sales/salesDetails/FilterOptions";
import SalesDetailsList from "../../components/sales/salesDetails/SalesDetailsList";
import { getAllSalesDetailsAction } from "../../redux/sales/sales.action";
import Template from "../../components/ui/Template";

const SalesDetailsPage = () => {
    const dispatch = useDispatch();
    const filtersSalesDetails = useSelector(({ sales }) => sales.filtersSalesDetails);

    useEffect(() => {
        (() => dispatch(getAllSalesDetailsAction(filtersSalesDetails)))();
    }, [filtersSalesDetails]);

    return (
        <Template
            title="Detalle de ingresos"
            description="Este es el detalle de cada una de los ingresos registrados"
        >
            <div className="flex flex-col space-y-4">
                <div>
                    <FilterOptions />
                </div>
                <div>
                    <SalesDetailsList />
                </div>
            </div>
        </Template>
    );
};

export default SalesDetailsPage;
