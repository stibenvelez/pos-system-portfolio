import { Link, useNavigate } from "react-router-dom";
import formatDate from "../../helpers/FormatFecha";
import formatMoney from "../../helpers/formatMoney";
import { useDispatch, useSelector } from "react-redux";

import Badge from "../ui/Badge";
import { GET_PRODUCT_SUCCESS } from "../../types/productsTypes";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { disableProductAction } from "../../redux/products/products.action";


const ItemProduct = ({ productData }) => {
    const {
        idProduct,
        product,
        unitPrice,
        unitCost,
        category,
        commissionPercentage,
        state,
        image,
        brand,
    } = productData;

    const COLOR_STATE = {
        active: "success",
        inactive: "danger",
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {filters} = useSelector(({products})=>products);

    const handleDesactivate = (id) => {
        Swal.fire({
            title: `Estás seguro de eliminar el producto ${product}?`,
            text: "No puedes revertir esta acción!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminalo!",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(disableProductAction(id));
                Swal.fire(
                    "Eliminado!",
                    "El producto ha sido eliminado",
                    "success"
                );
            }
        });
    };
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 shadow ">
            <th
                scope="row"
                className="flex items-center gap-2 px-6 py-2 font-medium text-gray-900 capitalize dark:text-white whitespace-nowrap"
            >
                <img
                    src={
                        image
                            ? `${
                                  import.meta.env.VITE_BACKEND_URL
                              }/static/products/images/${image}`
                            : `${
                                  import.meta.env.VITE_PUBLIC_URL
                              }/img/products/productDefault.png`
                    }
                    className="w-12 h-12 rounded-full cursor-pointer"
                    onClick={() => navigate(`${idProduct}`)}
                />
                <div className="flex flex-col">
                    <Link to={`${idProduct}`}>{product}</Link>
                    <p className="text-sm font-normal text-gray-400">
                        {brand && brand}
                    </p>
                    <p className="text-sm font-normal text-gray-400">
                        {category}
                    </p>
                </div>
            </th>
            <td className="px-6 py-2">{formatMoney.format(unitCost)}</td>
            <td className="px-6 py-2">{formatMoney.format(unitPrice)}</td>
            <td className="px-6 py-2">{commissionPercentage}%</td>
            <td className="px-6 py-2">
                <Badge type={COLOR_STATE[state]}>{state}</Badge>
            </td>
            <td>
                <div className="flex items-center py-2 ">
                    <Link
                        to={`${idProduct}`}
                        className="items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 rounded-l hover:bg-gray-600"
                    >
                        ver
                    </Link>
                    <Link
                        to={`edit-product/${idProduct}`}
                        className="items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 hover:bg-blue-800"
                    >
                        Editar
                    </Link>
                    <button
                        onClick={() => handleDesactivate(idProduct)}
                        className={`items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 rounded-r  ${
                            state === "active"
                                ? "hover:bg-red-500"
                                : "hover:bg-green-600"
                        } hover:bg-red-500`}
                    >
                        {state === "active" ? "Desactivar" : "Activar"}
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default ItemProduct;
