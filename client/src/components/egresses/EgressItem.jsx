import { Link } from "react-router-dom";
import { formatDate } from "../../helpers/FormatDate";
import formatMoney from "../../helpers/formatMoney";
import Swal from 'sweetalert2'

import {useDispatch} from 'react-redux'
import { cancelSaleByIdAction } from "../../redux/sales/sales.action";
const SaleItem = ({ egress }) => {
    const {
        idEgress,
        idProvider,
        egressCategoryId,
        egressSubCategoryId,
        value,
        date,
        state,
        egressCategory,
        egressSubCategory,
    } = egress;
    const dispatch = useDispatch()

    const handleCancel = (id) => {
        Swal.fire({
            title: "Desea anular este ingreso?",
            text: "Solo el administrador puede revertir la anulacion!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(cancelSaleByIdAction(sale));
            }
        });
    };

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th className="px-6 py-4">{idEgress}</th>
            <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
                {egressCategory}
            </td>
            <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
                {egressSubCategory}
            </td>
            <td className="px-6 py-4 font-semibold">
                {formatMoney.format(value)}
            </td>
            <td className="px-6 py-4">{formatDate(date)}</td>
            <td className="flex items-center py-4 gap-1">
                <Link
                    to={`${idEgress}`}
                    className="items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400  hover:bg-gray-600 rounded"
                >
                    ver
                </Link>
                <button className="items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 hover:bg-cyan-500 rounded">
                    Editar
                </button>
                {state === 1 ? (
                    <button
                        onClick={() => handleCancel(idEgress)}
                        className="items-center px-2 py-1 text-white  transition duration-200 ease-in-out bg-gray-400 hover:bg-red-500 rounded"
                    >
                        Anular
                    </button>
                ) : null}
            </td>
        </tr>
    );
};

export default SaleItem;
