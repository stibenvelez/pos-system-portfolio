import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployeesAction } from "../../../redux/employees/employees.actions";
import { getAllProductsCategoriesAction } from "../../../redux/products/products.action";
import { editProductSaleDetailAction } from "../../../redux/sales/sales.action";
import Card from "../../ui/Card/Card";
import addProductToDetail from "./utils/addProductToDetail";

const FormEditItemDetailSale = ({ product, onClose,handleSubmit }) => {
    const INITIAL_STATE = product;
    const dispatch = useDispatch();
    const [newProduct, setNewProduct] = useState(INITIAL_STATE);

    useEffect(() => {
        (() => {
            dispatch(getAllProductsCategoriesAction());
        })();
    }, []);
    useEffect(() => {
        (() => {
            dispatch(getAllEmployeesAction());
        })();
    }, []);

    const products = useSelector(({ products }) => products.products);
    const employees = useSelector(({ employees }) => employees.employees);
    const {productsCategories} = useSelector(
        ({ products }) => products
    );
    const handleChange = ({ target }) => {
        setNewProduct({
            ...newProduct,
            [target.name]: target.value,
        });
    };

    const handleEditProduct = async () => {
        const { result, errors } = await addProductToDetail(newProduct);
        if (!errors) {
            dispatch(editProductSaleDetailAction(result));
            onClose()
        }
    };

    return (
        <div>
            <div className="col-span-6 md:col-span-2">
                <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700"
                >
                    Categoria<span className="text-red-600">*</span>
                </label>
                <select
                    id="category"
                    name="category"
                    autoComplete="category"
                    className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    //onBlur={handleProduct}
                    value={newProduct.category}
                    //ref={categoryRef}
                >
                    <option hidden value="">
                        --selecionar --
                    </option>
                    {productsCategories.map((category) => (
                        <option
                            key={category.idProductCategory}
                            value={category.idProductCategory}
                        >
                            {category.category}
                        </option>
                    ))}
                </select>
            </div>
            <div className="col-span-6 md:col-span-2">
                <label
                    htmlFor="productName"
                    className="block text-sm font-medium text-gray-700"
                >
                    Producto<span className="text-red-600">*</span>
                </label>
                <select
                    id="product"
                    name="product"
                    autoComplete="product"
                    className="block w-full px-3 py-2 mt-1 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:opacity-50 disabled:bg-gray-200"
                    value={newProduct.product}
                    onChange={handleChange}
                >
                    <option value="">--selecionar --</option>
                    {products
                        .filter(
                            (product) =>
                                product.idProductCategory ===
                                parseInt(newProduct.category)
                        )
                        .map((product) => (
                            <option
                                key={product.idProduct}
                                value={product.idProduct}
                            >
                                {product.product}
                            </option>
                        ))}
                </select>
            </div>
            <div className="col-span-6 md:col-span-2">
                <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700"
                >
                    Cantidad<span className="text-red-600">*</span>
                </label>
                <input
                    min={1}
                    id="quantity"
                    name="quantity"
                    type="number"
                    autoComplete="quantity"
                    className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={newProduct.quantity}
                />
            </div>
            <div className="col-span-6 md:col-span-2">
                <label
                    htmlFor="employe"
                    className="block text-sm font-medium text-gray-700"
                >
                    Trabajador
                </label>
                <select
                    id="employe"
                    name="employe"
                    autoComplete="product"
                    className="block w-full px-3 py-2 mt-1 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:opacity-50 disabled:bg-gray-200"
                    onChange={handleChange}
                    value={newProduct.employe}
                >
                    <option value="">ninguno</option>
                    {employees &&
                        employees.map((employe) => (
                            <option
                                key={employe.idEmploye}
                                value={employe.idEmploye}
                                data-commission={20}
                            >
                                {employe.name}
                            </option>
                        ))}
                </select>
            </div>
            <div className="col-span-6 md:col-span-2">
                <label
                    htmlFor="unitDiscount"
                    className="block text-sm font-medium text-gray-700"
                >
                    Descuento por unidad
                </label>
                <input
                    id="unitDiscount"
                    min={0}
                    name="unitDiscount"
                    type="number"
                    placeholder="ABC000"
                    autoComplete="unitDiscount"
                    className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={newProduct.unitDiscount}
                />
            </div>

            <div className="col-span-6 sm:col-span-6">
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
                    rows={4}
                    onChange={handleChange}
                    value={newProduct.observations}
                />
            </div>
            <div>
                <Card className="mt-4">
                    <div className="flex gap-2">
                        <input
                            className="inline-block px-4 py-2 text-white rounded-md cursor-pointer bg-slate-700 hover:bg-slate-600"
                            type="button"
                            value="Registrar venta"
                            onClick={() => handleEditProduct()}
                        />

                        <input
                            className="inline-block px-4 py-2 text-white bg-gray-400 rounded-md cursor-pointer hover:bg-gray-500"
                            type="button"
                            value="Cancelar"
                            onClick={() => {}}
                        />
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default FormEditItemDetailSale;
