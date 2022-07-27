import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { formatDateTime } from "../../helpers/FormatDate";
import NcImage from "../../shared/NcImage";

const ProductDetail = () => {
    const navigate = useNavigate();
    const { product, loading } = useSelector(({ products }) => products);

    if (loading) {
        return (
            <div className="grid lg:grid-cols-8 gap-4 grid-cols-1">
                <div className="lg:col-span-2">
                    <div className="bg-gray-300 rounded aspect-w-1 aspect-h-1 shadow-sm">
                        <NcImage />
                    </div>
                </div>
                <div className="lg:col-span-6">
                    <div className="flex flex-col gap-4 p-4 bg-white rounded-md shadow md:p-10 ">
                        <div className="space-y-2">
                            <div className="h-3 w-1/2 bg-gray-100 rounded-md"></div>
                            <div className="h-5 block w-full bg-gray-200 rounded-md"></div>
                        </div>
                        <div className="flex w-full gap-2">
                            <div className="w-full flex-col flex gap-2">
                                <div className="h-3 w-1/2 bg-gray-100 rounded-md"></div>
                                <div className="h-5 block w-full bg-gray-200 rounded-md"></div>
                            </div>
                            <div className="w-full flex-col flex gap-2">
                                <div className="h-3 w-1/2 bg-gray-100 rounded-md"></div>
                                <div className="h-5 block w-full bg-gray-200 rounded-md"></div>
                            </div>
                        </div>
                        <div className="flex w-full gap-2">
                            <div className="w-full flex-col flex gap-2">
                                <div className="h-3 w-1/2 bg-gray-100 rounded-md"></div>
                                <div className="h-5 block w-full bg-gray-200 rounded-md"></div>
                            </div>
                            <div className="w-full flex-col flex gap-2">
                                <div className="h-3 w-1/2 bg-gray-100 rounded-md"></div>
                                <div className="h-5 block w-full bg-gray-200 rounded-md"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="grid lg:grid-cols-8 gap-4 grid-cols-1">
            <div className="lg:col-span-2">
                <div className="bg-gray-300 overflow-hidden rounded aspect-w-1 aspect-h-1 shadow-sm outline outline-4 outline-gray-300">
                    <NcImage
                        src={`${
                            import.meta.env.VITE_BACKEND_URL
                        }/static/products/images/${product.image}`}
                    />
                </div>
            </div>
            <div className="lg:col-span-6">
                <div className="grid grid-cols-1 gap-4 ">
                    <div className="flex flex-col gap-4 p-4 bg-white rounded-md shadow md:p-10">
                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                <div className="">
                                    <label
                                        htmlFor="quantity"
                                        className="block text-sm font-medium text-gray-700 capitalize"
                                    >
                                        Producto
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        id="product"
                                        name="product"
                                        type="text"
                                        placeholder="Ejemplo: Pasacinta, Parlante 10 pulgadas, polarizado completo"
                                        autoComplete="product"
                                        className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        defaultValue={product?.product}
                                        readOnly
                                    />
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="category"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Categoria
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        id="idProductCategory"
                                        name="idProductCategory"
                                        autoComplete="idProductCategory"
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        defaultValue={product?.category}
                                        readOnly
                                    />
                                </div>
                                {product?.brand && (
                                    <div className="">
                                        <label
                                            htmlFor="quantity"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Marca
                                        </label>
                                        <input
                                            id="brand"
                                            name="brand"
                                            type="text"
                                            placeholder="Pionneer, Bose, Focal, Kenwood"
                                            autoComplete="brand"
                                            className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            defaultValue={product?.brand}
                                            readOnly
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                <div className="">
                                    <label
                                        htmlFor="quantity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Precio de venta
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        id="unitPrice"
                                        name="unitPrice"
                                        type="text"
                                        placeholder="Ejemplo: Pasasinta, Parlante 10 pulgadas, polarizado completo"
                                        autoComplete="unitPrice"
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        defaultValue={product?.unitPrice}
                                        readOnly
                                    />
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="unitCost"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Costo unitario
                                    </label>
                                    <input
                                        id="unitCost"
                                        name="unitCost"
                                        type="text"
                                        placeholder="Ejemplo: Pasasinta, Parlante 10 pulgadas, polarizado completo"
                                        autoComplete="quantity"
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        defaultValue={product?.unitCost}
                                        readOnly
                                    />
                                </div>
                                <div className="col-span-1 ">
                                    <label
                                        htmlFor="quantity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        % comisión
                                    </label>
                                    <input
                                        id="commissionPercentage"
                                        name="commissionPercentage"
                                        type="text"
                                        placeholder="% 000"
                                        autoComplete="commissionPercentage"
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        defaultValue={
                                            product?.commissionPercentage
                                        }
                                        readOnly
                                    />
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="quantity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Valor de comision
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        id="commissionValue"
                                        name="commissionValue"
                                        type="text"
                                        placeholder="Ejemplo: Pasasinta, Parlante 10 pulgadas, polarizado completo"
                                        autoComplete="commissionValue"
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        defaultValue={product?.commissionValue}
                                        readOnly
                                    />
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="createdAt"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Creado el:
                                        <span className="text-red-600">*</span>
                                    </label>

                                    {formatDateTime(product?.createAt)}
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="createdAt"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Ultima modificación:
                                        <span className="text-red-600">*</span>
                                    </label>

                                    {formatDateTime(product?.updateAt)}
                                </div>
                            </div>
                            <div>
                                <div className="">
                                    <label
                                        htmlFor="observations"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Notas
                                    </label>
                                    <textarea
                                        id="observations"
                                        name="observations"
                                        autoComplete="observations"
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        defaultValue={product?.observations}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 py-3">
                        <Link
                            to={`/dashboard/products/edit-product/${product?.idProduct}`}
                            className="px-3 py-2 text-white transition duration-150 ease-in-out rounded-md bg-slate-800 hover:bg-slate-700"
                        >
                            Editar producto
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
