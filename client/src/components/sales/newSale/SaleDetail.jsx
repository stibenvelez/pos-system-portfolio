import { useEffect, useState } from "react";
import ItemSailDetail from "./ItemSailDetail";

// Redux
import { useSelector } from "react-redux";
import formatMoney from "../../../helpers/formatMoney";

const SaleDetail = () => {
    const sailDetails = useSelector(({ sales }) => sales.detail);
    const [totalSumary, setTotalSumary] = useState({});
    useEffect(() => {
        const totalGross = sailDetails.reduce(
            (acc, value) => acc + value.totalPrice,
            0
        );
        const totalDiscount = sailDetails.reduce(
            (acc, value) => acc + value.totalDiscount,
            0
        );

        const totalNet = totalGross - totalDiscount;
        setTotalSumary({
            totalGross,
            totalDiscount,
            totalNet,
        });
    }, [sailDetails]);

    return (
        <>
            <div className="relative overflow-x-auto bg-white border shadow-sm sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="bg-gray-50">
                        <tr className="text-gray-800 capitalize">
                            <th scope="col" className="px-6 py-3">
                                Producto
                            </th>
                            <th scope="col" className="px-6 py-3">
                                cantidad
                            </th>
                            <th scope="col" className="px-6 py-3">
                                valor unit
                            </th>
                            <th scope="col" className="px-6 py-3">
                                valor total
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Comision
                            </th>
                            <th scope="col" className="px-6 py-3">
                                acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sailDetails.map((detail, index) => (
                            <ItemSailDetail detail={detail} key={index} />
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="text-gray-700 bg-slate-50">
                            <td className="px-6 py-2 text-md">Total bruto:</td>
                            <td className="px-6 py-2 text-md">
                                {formatMoney.format(totalSumary.totalGross)}
                            </td>
                            <td colSpan={4}></td>
                        </tr>
                        <tr className="text-gray-700 bg-slate-50 ">
                            <td className="px-6 py-2 text-md">
                                Total descontado:
                            </td>
                            <td className="px-6 py-2 text-md ">
                                {formatMoney.format(totalSumary.totalDiscount)}
                            </td>
                            <td colSpan={4}></td>
                        </tr>
                        <tr className="text-gray-700 bg-gray-50">
                            <td className="px-6 py-2 text-xl">Total Neto:</td>
                            <td className="px-6 py-2 text-xl font-bold">
                                {formatMoney.format(totalSumary.totalNet)}
                            </td>
                            <td colSpan={4}></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default SaleDetail;
