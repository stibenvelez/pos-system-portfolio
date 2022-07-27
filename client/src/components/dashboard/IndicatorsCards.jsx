import React, { createElement, Fragment } from "react";
import Card from "../ui/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import formatMoney from "../../helpers/formatMoney";
import Spinner from "../../components/ui/Spinners/Spinner";
import {
    CurrencyDollarIcon,
    ReceiptRefundIcon,
    CreditCardIcon,
    CashIcon,
} from "@heroicons/react/outline";
import IndicatorsSkeleton from "./IndicatorsSkeleton";

const IndicatorsCards = () => {
    const { totalSold, count, totalExpenses, totalCommission } = useSelector(
        ({ reports }) => reports.sales
    );
    const loading = useSelector(({ reports }) => reports.loading);

    const DATA_INDICATORS = [
        {
            title: "Ingresos totales",
            value: formatMoney.format(totalSold),
            icon: (
                <CurrencyDollarIcon className="h-8 text-green-800 text-2xl" />
            ),
            color: "bg-green-100",
        },
        {
            title: "Ventas realizadas",
            value: count,
            icon: (
                <ReceiptRefundIcon className="h-8 text-indigo-800 text-2xl" />
            ),
            color: "bg-indigo-100",
        },
        {
            title: "Gastos totales",
            value: formatMoney.format(totalExpenses),
            icon: <CreditCardIcon className="h-8 text-red-800 text-2xl" />,
            color: "bg-red-100",
        },
        {
            title: "Comisiones pagadas",
            value: formatMoney.format(totalCommission),
            icon: <CashIcon className="h-8 text-yellow-800 text-2xl" />,
            color: "bg-yellow-100",
        },
    ];


    if (loading) {
        return <IndicatorsSkeleton />;
    }

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 ">
            {DATA_INDICATORS.map((item, index) => (
                <Card
                    key={index}
                    className="h-36 flex-col flex-wrap gap-4 items-center"
                >
                    <div
                        className={`inline-block rounded-md p-1 ${item.color}`}
                    >
                        {item.icon}
                    </div>
                    <h3 className="text-gray-700">{item.title}</h3>
                    <div>
                        <h4 className="text-2xl text-gray-700 font-bold">
                            {item.value}
                        </h4>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default IndicatorsCards;
