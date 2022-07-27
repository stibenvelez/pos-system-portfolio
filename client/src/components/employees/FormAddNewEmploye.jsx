import React, { useEffect, useState } from "react";
import Card from "../ui/Card/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewEmployeAction } from "../../redux/employees/employees.actions";


const FormAddNewEmploye = ({ setOptionsState }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newEmploye, setNewEmploye] = useState({});

    const handleChange = (e) => {
        setNewEmploye({
            ...newEmploye,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewEmployeAction(newEmploye));
    };

    return (
        <Card>
            <div>
                <h3 className="text-lg text-gray-800 mb-3 font-bold">
                    Agregar un nuevo empelado
                </h3>
                <form onSubmit={handleSubmit}>
                    <div className="p-4 flex flex-col gap-4">
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Nombre"
                                className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="document">Documento</label>
                            <input
                                name="document"
                                type="text"
                                placeholder="Documento de identidad"
                                className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="position">Cargo</label>
                            <input
                                name="position"
                                type="text"
                                placeholder="cargo del empleado"
                                className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="observations">Observaciones</label>
                            <textarea
                                name="observations"
                                type="text"
                                placeholder="Observaciones..."
                                rows={4}
                                className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex gap-2">
                            <input
                                className="inline-block px-4 py-2 text-white rounded-md cursor-pointer bg-slate-700 hover:bg-slate-600"
                                type="submit"
                                value="Agregar empelado"
                            />

                            <input
                                className="inline-block px-4 py-2 text-white bg-gray-400 rounded-md cursor-pointer hover:bg-gray-500"
                                type="button"
                                value="Cancelar"
                                onClick={()=>setOptionsState(false)}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </Card>
    );
};

export default FormAddNewEmploye;