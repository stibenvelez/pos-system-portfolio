import { useEffect } from "react";
import SalesList from "../../components/sales/SalesList";
import { useDispatch, useSelector } from "react-redux";
import Template from "../../components/ui/Template";
import FilterOptions from "../../components/sales/FilterOptions";
import { getAllSalesAction } from "../../redux/sales/sales.action";

const SalesPage = () => {
    const dispatch = useDispatch();
    const filters = useSelector(({ sales }) => sales.filters);

    useEffect(() => {
        (() => dispatch(getAllSalesAction(filters)))();
    }, [filters]);

    return (
        <Template
            title="Ingresos"
            description=" Aqui encontrarà el listado de todas los ingresos
                            registrados"
        >
            <div className="flex flex-col gap-4">
                <div>
                    <FilterOptions />
                </div>
                <div>
                    <SalesList />
                </div>
            </div>
        </Template>
    );
};

export default SalesPage;
