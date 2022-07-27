import React, { useState } from "react";
import { useSelector } from "react-redux";

const DataSale = ({ handleChange, errors }) => {
    const [isAnonymus, setIsAnonymus] = useState(false);
    const { date, document, documentType, payMethod } = useSelector(
        ({ sales }) => sales.dataSale
    );

    const handleChangeAnonymus = (e) => {
        const value = {
            e: {
                target: {
                    name: "document",
                    value: 0,
                },
            },
        };
        setIsAnonymus(e.target.checked);
        handleChange(value.e);
    };

    return (
        <div>
            <div className="col-span-6 sm:col-span-2">
                <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                >
                    Fecha<span className="text-red-600">*</span>
                </label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    autoComplete="given-name"
                    className="px-2 py-1 mt-1 border border-gray-200 rounded-md"
                    onChange={handleChange}
                    value={date}
                />
            </div>

            <div className="mt-3">
                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="">
                        <label
                            htmlFor="document"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Documento
                        </label>
                        <div className="flex items-center">
                            <select
                                id="documentType"
                                type="text"
                                name="documentType"
                                autoComplete="given-documentType"
                                className="px-3 py-2 mt-1 bg-gray-100 border border-gray-200 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={handleChange}
                                value={documentType}
                                disabled={isAnonymus}
                            >
                                <option value="1">CC</option>
                                <option value="2">NIT</option>
                                <option value="3">CE</option>
                                <option value="4">PPE</option>
                            </select>
                            <input
                                type="text"
                                name="document"
                                id="document"
                                autoComplete="document"
                                className={`${
                                    isAnonymus ? "bg-gray-100" : ""
                                } w-full px-3 py-2 mt-1 border border-gray-200 rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                onChange={handleChange}
                                disabled={isAnonymus}
                                value={isAnonymus ? 0 : document}
                            />
                        </div>
                    </div>
                    <div className="">
                        <label
                            htmlFor="category"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Metodo de pago
                            <span className="text-red-600">*</span>
                        </label>
                        <select
                            id="payMethod"
                            name="payMethod"
                            autoComplete="payMethod"
                            className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={handleChange}
                            value={payMethod}
                        >
                            <option hidden value="">
                                --selecionar --
                            </option>
                            <option value="1">Efectivo</option>
                            <option value="2">Nequi</option>
                            <option value="3">Bancolombia</option>
                        </select>
                        {errors.payMethod && payMethod == "" && (
                            <div>
                                <p className="p-1 text-sm text-red-600">
                                    {errors.payMethod}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center  space-x-2">
                        <input
                            type="checkbox"
                            name="anonymousClient"
                            //onChange={(e) => setIsAnonymus(e.target.checked)}
                            onChange={handleChangeAnonymus}
                        />
                        <label className="ml-3">Cliente anómino</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataSale;
