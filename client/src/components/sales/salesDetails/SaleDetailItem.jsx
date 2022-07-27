import { Link } from "react-router-dom";
import formatMoney from "../../../helpers/formatMoney";
import formatDate from "../../../helpers/FormatFecha";

const SaleDetailItem = ({ saleDetail }) => {
    const {
        product,
        quantity,
        unitPrice,
        totalPrice,
        commissionValue,
        createdAt,
        idSale,
        name,
    } = saleDetail;

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th className="px-6 py-4">{idSale}</th>
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
                {product}
            </th>
            <td className="px-6 py-4 font-semibold">{quantity}</td>
            <td className="px-6 py-4 font-semibold">
                {formatMoney.format(unitPrice)}
            </td>
            <td className="px-6 py-4 font-semibold">
                {formatMoney.format(totalPrice)}
            </td>
            <td className="px-6 py-4 font-semibold">{name}</td>
            <td className="px-6 py-4 font-semibold">
                {formatMoney.format(commissionValue)}
            </td>
            <td className="px-6 py-4">{formatDate(createdAt)}</td>
            {/* <td className="flex items-center py-4 ">
                <Link
                    to={`/sales/${idSale}`}
                    className="items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 rounded-l hover:bg-gray-600"
                >
                    ver
                </Link>
                <button className="items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 hover:bg-blue-800">
                    Editar
                </button>
                <button className="items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 rounded-r hover:bg-red-500">
                    Anular
                </button>
            </td> */}
        </tr>
    );
};

export default SaleDetailItem;
