import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Card from "../ui/Card/Card";
import { validateNewEgress } from "./utils/validateNewEgress";

import { formatDate } from "../../helpers/FormatDate";
import { addNewEgressAction } from "../../redux/egresses/egresses.action";
const date = new Date();

const INITIAL_STATE_FORM = {
    date: formatDate(date),
    description: "",
    provider: 1,
    category: "",
    subcategory: "",
    value: "",
};

const FormNewEgress = () => {
    const navigate = useNavigate();
    const categoryRef = useRef("");
    const dispatch = useDispatch();

    const [newEgress, setNewEgress] = useState(INITIAL_STATE_FORM);
    const egressesCategories = useSelector(
        ({ egresses }) => egresses.egressesCategories
    );
    const egressesSubcategories = useSelector(
        ({ egresses }) => egresses.egressesSubcategories
    );
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setNewEgress({
            ...newEgress,
            subcategory: "",
        });
    }, [newEgress.category, categoryRef.current.value]);

    const handleChange = (e) => {
        setNewEgress({
            ...newEgress,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateNewEgress(newEgress);

        if (Object.keys(errors).length) {
            setErrors(errors);
            return;
        }
        setErrors({});

        dispatch(addNewEgressAction(newEgress));
        setNewEgress(INITIAL_STATE_FORM);
    };

    return (
        <Card>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col form-group">
                            <label htmlFor="date">Fecha</label>
                            <input
                                name="date"
                                type="date"
                                className="px-3 py-2 mt-1 capitalize border rounded-md shadow-sm lg:w-1/4 border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                id="date"
                                onChange={handleChange}
                                value={newEgress.date}
                                //onBlur={handleValidate}
                            />
                            {errors.date && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.date}
                                </p>
                            )}
                        </div>
                        <div className="flex gap-4">
                            <div className="w-full form-group">
                                <label htmlFor="provider">Proveedor</label>
                                <select
                                    className="block px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="provider"
                                    name="provider"
                                    onChange={handleChange}
                                    value={newEgress.provider}
                                    //onBlur={handleValidate}
                                >
                                    <option value="1">Ninguno</option>
                                </select>
                                {errors.provider && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.provider}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-full form-group">
                                <label htmlFor="category">Categoría</label>
                                <select
                                    className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="category"
                                    name="category"
                                    onChange={handleChange}
                                    value={newEgress.category}
                                    ref={categoryRef}
                                    //onBlur={handleValidate}
                                >
                                    <option hidden value="">
                                        Seleccione una categoría
                                    </option>
                                    {egressesCategories &&
                                        egressesCategories.map((category) => (
                                            <option
                                                key={category.idEgressCategory}
                                                value={
                                                    category.idEgressCategory
                                                }
                                            >
                                                {category.egressCategory}
                                            </option>
                                        ))}
                                </select>
                                {errors.category && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.category}
                                    </p>
                                )}
                            </div>

                            <div className="w-full form-group">
                                <label htmlFor="subcategory">
                                    Subcategoría
                                </label>
                                <select
                                    className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="subcategory"
                                    name="subcategory"
                                    disabled={!newEgress.category}
                                    onChange={handleChange}
                                    value={newEgress.subcategory}
                                    //onBlur={handleValidate}
                                >
                                    <option hidden value="">
                                        Seleccione una subcategoría
                                    </option>
                                    {egressesSubcategories &&
                                        egressesSubcategories
                                            .filter(
                                                (subcategory) =>
                                                    subcategory.idEgresscategory ==
                                                    newEgress.category
                                            )
                                            .map((subcategory) => (
                                                <option
                                                    key={
                                                        subcategory.idEgressSubcategory
                                                    }
                                                    value={
                                                        subcategory.idEgressSubcategory
                                                    }
                                                >
                                                    {
                                                        subcategory.egressSubcategory
                                                    }
                                                </option>
                                            ))}
                                </select>
                                {errors.subcategory && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.subcategory}
                                    </p>
                                )}
                            </div>
                            <div className="w-full form-group">
                                <label htmlFor="value">Valor</label>
                                <input
                                    className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="value"
                                    type="number"
                                    placeholder="$0.000"
                                    name="value"
                                    onChange={handleChange}
                                    value={newEgress.value}
                                    //onBlur={handleValidate}
                                />
                                {errors.value && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.value}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="description">Descripción</label>
                            <textarea
                                rows={4}
                                type="text"
                                className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                id="description"
                                name="description"
                                onChange={handleChange}
                                value={newEgress.description}
                            />
                        </div>
                        <div className="flex gap-2">
                            <input
                                className="inline-block px-4 py-2 text-white rounded-md cursor-pointer bg-slate-700 hover:bg-slate-600"
                                type="submit"
                                value="Registrar egreso"
                            />

                            <input
                                className="inline-block px-4 py-2 text-white bg-gray-400 rounded-md cursor-pointer hover:bg-gray-500"
                                type="button"
                                value="Cancelar"
                                onClick={() => navigate(-1)}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </Card>
    );
};

export default FormNewEgress;
