import React from "react";
import { useSelector } from "react-redux";
import formatMoney from "../../../helpers/formatMoney";
import Card from "../../ui/Card/Card";
import Spinner from "../../ui/Spinners/Spinner";
import ItemSaleDetail from "./ItemSaleDetail";
import formatData from "../../../helpers/FormatFecha";

const SaleComponent = () => {
    const { sale, loading } = useSelector(({ sales }) => sales);
    const { id } = sale;

    if (loading)
        return (
            <Card>
                <div className="container flex items-center justify-center w-full max-w-4xl py-40 mx-auto">
                    <Spinner />
                </div>
            </Card>
        );
    
    if (!sale || Object.keys(sale).length === 0) {
        return (
            <Card>
                <div className="container flex items-center justify-center w-full max-w-4xl py-40 mx-auto">
                    <h1 className="text-center text-2xl font-bold">No se encontró este ingreso</h1>
                </div>
            </Card>
        );
    }

    return (
        <Card>
            <div className="flex flex-col gap-4 p-3">
                <div className="flex gap-4 p-2 border rounded-md">
                    <div>
                        <img
                            src={`${
                                import.meta.env.VITE_PUBLIC_URL
                            }/img/app/logo.svg`}
                            className="w-40 fill-red-500"
                            alt="React Logo"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div>
                            <h3 className="text-2xl font-semibold uppercase">
                                COD. Nº {id}
                            </h3>
                        </div>

                        <div>
                            <p>Documento: {sale.document}</p>
                        </div>
                        <div>
                            <p>fecha: {formatData(sale.date)}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <table className="w-full overflow-hidden text-sm text-left text-gray-500 rounded-md dark:text-gray-400">
                        <thead className="text-xs text-gray-800 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Cant.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Precio unit.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Precio total
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Marca
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Trabajador
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {sale.detail &&
                                sale.detail.map((saleDetail) => (
                                    <ItemSaleDetail
                                        saleDetail={saleDetail}
                                        key={saleDetail.idSaleDetail}
                                    />
                                ))}
                        </tbody>
                    </table>
                    <section className="flex flex-col items-end py-3">
                        <div className="flex items-end gap-3 py-1 text-gray-800">
                            <span className="text-sm"> Valor Descontado: </span>
                            <p className="text-lg">
                                {formatMoney.format(sale.totalGross)}
                            </p>
                        </div>
                        <div className="flex items-end gap-3 py-1 text-gray-800">
                            <span className="text-sm"> Valor Descontado: </span>
                            <p className="text-base">
                                {formatMoney.format(sale.totalDiscount)}
                            </p>
                        </div>
                        <div className="flex items-end gap-3 py-1 text-gray-800">
                            <span className="text-lg"> Valor total: </span>
                            <p className="text-2xl font-bold">
                                {formatMoney.format(sale.totalNet)}
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </Card>
    );
};

export default SaleComponent;
