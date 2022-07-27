import { useSelector } from "react-redux";
import Spinner from "../../ui/Spinners/Spinner";
import {Table} from "../../ui/Table";

import SaleDetailItem from "./SaleDetailItem";

const SalesDetailsList = () => {
    const { loading, salesDetails } = useSelector(
        ({ sales }) => sales
    );

    if (loading) {
        return (
            <div className="relative overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400"></table>
                <div className="w-full flex justify-center my-8">
                    <Spinner />
                </div>
            </div>
        );
    }

    if (salesDetails.length === 0) {
        return (
            <div className="py-3 p-5 bg-amber-100 shadow-md border border-yellow-200 text-sm text-yellow-800">
                <p>No se encontraron resultados</p>
            </div>
        );
    }
    return (
        <Table>
            <thead className="text-xs text-gray-50 uppercase bg-slate-800 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 w-6">
                        id de venta
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Producto
                    </th>
                    <th scope="col" className="px-6 py-3 w-4">
                        cant.
                    </th>
                    <th scope="col" className="px-6 py-3">
                        precio unit.
                    </th>
                    <th scope="col" className="px-6 py-3">
                        precio total
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Trabajador
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Comision
                    </th>
                    <th scope="col" className="px-6 py-3">
                        fecha
                    </th>
                    {/* 
                    <th scope="col" className="px-6 py-3">
                        Accions
                    </th> */}
                </tr>
            </thead>
            <tbody>
                {salesDetails.map((saleDetail, inx) => (
                    <SaleDetailItem saleDetail={saleDetail} key={inx} />
                ))}
            </tbody>
        </Table>
    );
};

export default SalesDetailsList;
