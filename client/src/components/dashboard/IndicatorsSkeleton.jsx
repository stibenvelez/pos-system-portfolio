import React from "react";
import Card from "../ui/Card/Card";

const IndicatorsSkeleton = () => {
    const DATA_INDICATORS = [
        {
            title: "Ingresos totales",
            color: "bg-green-100",
        },
        {
            title: "Ventas realizadas",
            color: "bg-indigo-100",
        },
        {
            title: "Gastos totales",

            color: "bg-red-100",
        },
        {
            title: "Comisiones pagadas",
            color: "bg-yellow-100",
        },
    ];

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 animate-pulse ">
            {DATA_INDICATORS.map((item, index) => (
                <Card
                    key={index}
                    className="h-36 flex-col flex-wrap gap-4 items-center"
                >
                    <div
                        className={`inline-block rounded-md w-8 h-8 p-1 ${item.color}`}
                    ></div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-gray-700 h-3 bg-gray-100"></h3>
                        <div>
                            <h4 className="text-gray-700 font-bold h-3 bg-gray-100"></h4>
                        </div>
                        <h4 className="text-gray-700 font-bold h-4 bg-gray-200"></h4>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default IndicatorsSkeleton;
