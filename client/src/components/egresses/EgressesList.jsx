import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../ui/Spinners/Spinner";
import EgressItem from "./EgressItem";

const EgressesList = () => {
    const egresses = useSelector(({ egresses }) => egresses.egresses);
    const loading = useSelector(({ egresses }) => egresses.loading);
    const error = useSelector(({ sales }) => sales.error);

    if (loading) {
        return (
            <div className="relative overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400"></table>
                <div className="flex justify-center w-full my-8">
                    <Spinner />
                </div>
            </div>
        );
    }

    if (egresses.length === 0) {
        return (
            <div className="p-5 py-3 text-sm text-yellow-800 border border-yellow-200 shadow-md bg-amber-100">
                <p>{error}</p>
            </div>
        );
    }
    return (
        <div>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs uppercase text-gray-50 bg-slate-800 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Categoria
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Subcategoria
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Valor
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {egresses.map((egress) => (
                            <EgressItem egress={egress} key={egress.idEgress} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EgressesList;
