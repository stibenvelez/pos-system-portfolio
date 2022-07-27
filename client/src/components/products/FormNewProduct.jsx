import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clienteAxios from "../../config/axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../ui/Spinners/Spinner";
import Card from "../ui/Card/Card";
import { validateFormProduct } from "./utilities/validateFormProduct";
import {
    addNewProductAction,
    deleteImageAction,
    editProductByIdAction,
} from "../../redux/products/products.action";
import { createNewProductAdapter } from "../../adapters/product.adapter";
import { PlusSmIcon, TrashIcon } from "@heroicons/react/outline";
import Modal from "../ui/Modal";
import FormBrand from "../brads/FormBrand";
import NcImage from "../../shared/NcImage";

const INITIAL_VALUES = {
    idProduct: false,
    product: "",
    brand: "",
    brandId: "",
    idProductCategory: "",
    commissionPercentage: 0,
    unitCost: 0,
    unitPrice: 0,
    observations: "",
    image: null,
};

const ESTATE_PRODUCT = {
    add: "ADD",
    edit: "EDIT",
    view: "VIEW",
};

const FormNewProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const [newProduct, setNewProduct] = useState(INITIAL_VALUES);
    const [errors, setErrors] = useState({});
    const [stateForm, setStateForm] = useState("");
    const [openModalBrand, setOpenModalBrand] = useState(false);
    const [isModified, setIsModified] = useState(false);

    const { product, productsCategories } = useSelector(
        ({ products }) => products
    );
    const loading = useSelector(({ products }) => products.loading);
    const { brands } = useSelector(({ brands }) => brands);

    useEffect(() => {
        if (id) {
            setStateForm(ESTATE_PRODUCT.edit);
            setNewProduct(product);
            return;
        }
        setStateForm(ESTATE_PRODUCT.add);
    }, [product]);

    useEffect(() => {
        const productInitial = { ...product }
        const productEEdites = { ...newProduct }
        if (JSON.stringify(productInitial) === JSON.stringify(productEEdites)) {
            setIsModified(false)
            return;
        }
        setIsModified(true)
    }, [newProduct])


    const handleChange = ({ name, value }) => {
        setNewProduct({
            ...newProduct,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = await validateFormProduct(newProduct);

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        if (stateForm === ESTATE_PRODUCT.edit) {
            dispatch(editProductByIdAction(newProduct));
            return;
        }
        dispatch(addNewProductAction(createNewProductAdapter(newProduct)));
    };

    if (loading)
        return (
            <Card className="flex items-center justify-center h-72">
                <Spinner />
            </Card>
        );

    const rederImg = () => {
        if (
            (stateForm === ESTATE_PRODUCT.edit || stateForm === ESTATE_PRODUCT.add) &&
            newProduct.image &&
            newProduct.image.name
        ) {
            return <NcImage src={URL.createObjectURL(newProduct?.image)} />;
        }

        if (stateForm === ESTATE_PRODUCT.edit && !newProduct.image) {
            return <NcImage />;
        }

        if (stateForm === ESTATE_PRODUCT.add) {
            return (
                <div className="overflow-hidden bg-gray-300 rounded shadow-sm outline outline-4 outline-gray-300">
                    <NcImage src={`${newProduct.image}`} />
                </div>
            );
        }
        if (newProduct.image) {
            return (
                <div className="overflow-hidden bg-gray-300 rounded shadow-sm outline outline-4 outline-gray-300">
                    <NcImage
                        src={`${
                            import.meta.env.VITE_BACKEND_URL
                        }/static/products/images/${newProduct.image}`}
                    />
                </div>
            );
        }
    };

    const handleDeleImage = () => {
        if (stateForm === ESTATE_PRODUCT.edit) {
            dispatch(deleteImageAction(id));
        }
    };

    const SectionImgProduct = () => {
        return (
            <div className="flex flex-wrap lg:w-full lg:justify-center">
                <div className="relative w-full overflow-hidden bg-gray-300 rounded shadow-sm outline outline-4 outline-gray-300">
                    {rederImg()}
                    {product.image && (
                        <button
                            onClick={handleDeleImage}
                            className="absolute p-1 rounded-full cursor-pointer right-2 bottom-2 bg-gray-400/50 hover:bg-red-200"
                        >
                            <TrashIcon className="w-6 h-6 text-white " />
                        </button>
                    )}
                </div>
                <div className="w-full py-4">
                    <label className="block">
                        <span className="sr-only">Choose File</span>
                        <input
                            type="file"
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-700 file:text-white hover:file:bg-slate-600 hover:file:text-white focus:outline-none focus:shadow-outline hover:file:cursor-pointer"
                            aria-describedby="user_avatar_help"
                            id="user_avatar"
                            name="image"
                            onChange={(e) =>
                                handleChange({
                                    name: e.target.name,
                                    value: e.target.files[0],
                                })
                            }
                        />
                    </label>
                </div>
            </div>
        );
    };

    const onCancel = () => {
        setOpenModalBrand(false);
    };

    const handleOpenModalBrand = () => {
        setOpenModalBrand(true);
    };

    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-8">
            <Modal modalOpen={openModalBrand} onCancel={() => onCancel()}>
                <FormBrand onCancel={() => onCancel()} />
            </Modal>
            <div className="lg:col-span-2">{SectionImgProduct()}</div>
            <div className="lg:col-span-6">
                <div className="grid grid-cols-1 gap-4 ">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="flex flex-col gap-4 p-10 bg-white rounded-md shadow">
                            <div className="flex flex-col gap-4">
                                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                    <div className="">
                                        <label
                                            htmlFor="quantity"
                                            className="block text-sm font-medium text-gray-700 capitalize"
                                        >
                                            Producto
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            id="product"
                                            name="product"
                                            type="text"
                                            placeholder="Ejemplo: Pasacinta, Parlante 10 pulgadas, polarizado completo"
                                            autoComplete="product"
                                            className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            onChange={(e) =>
                                                handleChange({
                                                    name: e.target.name,
                                                    value: e.target.value,
                                                })
                                            }
                                            value={newProduct.product}
                                        />

                                        {errors.product && (
                                            <div>
                                                <p className="p-1 text-sm text-red-600">
                                                    {errors.product}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="">
                                        <label
                                            htmlFor="category"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Categoria
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </label>
                                        <select
                                            id="idProductCategory"
                                            name="idProductCategory"
                                            autoComplete="idProductCategory"
                                            className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            onChange={(e) =>
                                                handleChange({
                                                    name: e.target.name,
                                                    value: e.target.value,
                                                })
                                            }
                                            value={newProduct.idProductCategory}
                                        >
                                            <option hidden value="">
                                                --selecionar --
                                            </option>
                                            {productsCategories &&
                                                productsCategories.map(
                                                    (item) => (
                                                        <option
                                                            key={
                                                                item.idProductCategory
                                                            }
                                                            value={
                                                                item.idProductCategory
                                                            }
                                                        >
                                                            {item.category}
                                                        </option>
                                                    )
                                                )}
                                        </select>

                                        {errors.idProductCategory && (
                                            <div>
                                                <p className="p-1 text-sm text-red-600">
                                                    {errors.idProductCategory}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="">
                                        <label
                                            htmlFor="brandId"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Marca
                                        </label>
                                        <div className="flex items-center gap-2 mt-1">
                                            <select
                                                id="brandId"
                                                name="brandId"
                                                type="text"
                                                placeholder="Pionneer, Bose, Focal, Kenwood"
                                                autoComplete="brand"
                                                className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                onChange={(e) =>
                                                    handleChange({
                                                        name: e.target.name,
                                                        value: e.target.value,
                                                    })
                                                }
                                                value={newProduct.brandId}
                                            >
                                                <option hidden value="">
                                                    --selecionar --
                                                </option>
                                                {brands.map((brand) => (
                                                    <option
                                                        key={brand.brandId}
                                                        value={brand.brandId}
                                                    >
                                                        {brand.brand}
                                                    </option>
                                                ))}
                                            </select>
                                            <button
                                                type="button"
                                                onClick={handleOpenModalBrand}
                                                className="block p-1 bg-gray-500 rounded shadow hover:bg-indigo-400"
                                            >
                                                <PlusSmIcon className="w-4 text-white" />
                                            </button>
                                        </div>
                                        {errors.brand &&
                                            newProduct.brand == "" && (
                                                <div>
                                                    <p className="p-1 text-sm text-red-600">
                                                        {errors.brand}
                                                    </p>
                                                </div>
                                            )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                    <div className="">
                                        <label
                                            htmlFor="quantity"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Precio de venta
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            id="unitPrice"
                                            name="unitPrice"
                                            type="text"
                                            placeholder="Ejemplo: Pasasinta, Parlante 10 pulgadas, polarizado completo"
                                            autoComplete="unitPrice"
                                            className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            onChange={(e) =>
                                                handleChange({
                                                    name: e.target.name,
                                                    value: e.target.value,
                                                })
                                            }
                                            value={newProduct.unitPrice}
                                        />

                                        {errors.unitPrice &&
                                            newProduct.unitPrice !== "" && (
                                                <div>
                                                    <p className="p-1 text-sm text-red-600">
                                                        {errors.unitPrice}
                                                    </p>
                                                </div>
                                            )}
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
                                            onChange={(e) =>
                                                handleChange({
                                                    name: e.target.name,
                                                    value: e.target.value,
                                                })
                                            }
                                            value={newProduct.unitCost}
                                        />
                                        {errors.unitCost && (
                                            <div>
                                                <p className="p-1 text-sm text-red-600">
                                                    {values.unitCost}
                                                </p>
                                            </div>
                                        )}
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
                                            onChange={(e) =>
                                                handleChange({
                                                    name: e.target.name,
                                                    value: e.target.value,
                                                })
                                            }
                                            value={
                                                newProduct.commissionPercentage
                                            }
                                        />

                                        {errors.commissionPercentage &&
                                            newProduct.commissionPercentage ==
                                                "" && (
                                                <div>
                                                    <p className="p-1 text-sm text-red-600">
                                                        {
                                                            errors.commissionPercentage
                                                        }
                                                    </p>
                                                </div>
                                            )}
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
                                            onChange={(e) =>
                                                handleChange({
                                                    name: e.target.name,
                                                    value: e.target.value,
                                                })
                                            }
                                            value={newProduct.observations}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    className={`${
                                        stateForm === "EDIT" && !isModified
                                            ? "bg-gray-300"
                                            : "bg-slate-800 hover:bg-slate-700 cursor-pointer  "
                                    } px-4 py-2 text-white rounded-md `}
                                    type="submit"
                                    disabled={
                                        stateForm === "EDIT" && !isModified
                                            ? true
                                            : false
                                    }
                                >
                                    {stateForm === "ADD" ? "agregar" : "Editar"}
                                </button>
                                <input
                                    type="button"
                                    onClick={() => navigate(-1)}
                                    className="block px-4 py-2 text-white bg-gray-400 rounded-md cursor-pointer hover:bg-gray-300"
                                    value="Cancelar"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormNewProduct;
