import React from "react";
import { useSelector } from "react-redux";
import Card from "../ui/Card/Card";
import ItemReport from "./ItemReport";
import TableSkeleton from "./skeletons/TableSkeleton";

const ListReports = () => {
    const {sales} = useSelector(({ reports }) => reports.sales);
    const loading = useSelector(({ reports }) => reports.loading);
    if (loading) {
        return (
           <TableSkeleton/>
        );
    }

    if (sales.length === 0) {
        return (
            <div className="py-3 p-5 bg-amber-100 shadow-md border border-yellow-200 text-sm text-yellow-800">
                <p>No hay resultados para mostrar</p>
            </div>
        );
    }
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-slate-600 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Producto
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Cant
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Valor total
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
                        </tr>
                    </thead>
                    <tbody>
                        {sales &&
                            sales.map((sale) => (
                                <ItemReport
                                    report={sale}
                                    key={sale.idSaleDetail}
                                />
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ListReports;
