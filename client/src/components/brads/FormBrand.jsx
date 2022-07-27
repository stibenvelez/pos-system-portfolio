import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addNewBrandAction,
} from "../../redux/brands/brands.actions";
import { getAllProductsCategoriesAction } from "../../redux/products/products.action";

const INITIAL_STATE_BRAND = {
    brand: "",
    brandCategory: "",
    description: "",
};

const FormBrand = ({ onCancel }) => {
    const dispatch = useDispatch();
    const [newBrand, setNewBrand] = useState(INITIAL_STATE_BRAND);

    const { productsCategories } = useSelector(({ products }) => products);

    const { loading } = useSelector(({ brands }) => brands);

    const handleChange = (e) => {
        setNewBrand({ ...newBrand, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        dispatch(getAllProductsCategoriesAction());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewBrandAction(newBrand));
        onCancel();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <label
                            className="block  text-gray-700 mb-2"
                            htmlFor="brand"
                        >
                            marca
                        </label>

                        <input
                            className="appearance-none block w-full text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-50 focus:border-indigo-600"
                            id="brand"
                            type="text"
                            placeholder="Pionner, JBC, Bose, etc."
                            name="brand"
                            value={newBrand.brand}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full px-3">
                        <label
                            className="block  text-gray-700 mb-2"
                            htmlFor="brandCategory"
                        >
                            Categoría
                        </label>

                        <select
                            className=" block w-full text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-50 focus:border-indigo-600"
                            id="brandCategory"
                            name="brandCategory"
                            value={newBrand.brandCategory}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione una categoría</option>
                            {productsCategories &&
                                productsCategories.map((category) => (
                                    <option
                                        key={category.idProductCategory}
                                        value={category.idProductCategory}
                                    >
                                        {category.category}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="w-full px-3">
                        <label
                            className="block  text-gray-700 mb-2"
                            htmlFor="description"
                        >
                            Descripción
                        </label>

                        <textarea
                            className="appearance-none block w-full text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-50 focus:border-indigo-600"
                            id="description"
                            type="text"
                            placeholder="Descripción de la marca"
                            name="description"
                            value={newBrand.description}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    <button
                        type="submit"
                        className="bg-slate-800 hover:bg-slate-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        {loading ? "guardando..." : "Guardar"}
                    </button>
                    <button
                        onClick={() => onCancel()}
                        type="button"
                        className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormBrand;
