import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../../redux/users/users.actions";
import formValidateUpdateUser from "./utils/formValidateUpdateUser";

const INITIAL_STATE_USER = {
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    user: "",
    roleId: "",
};

const FormUpdateUser = ({ setOpenSlide }) => {
    const dispatch = useDispatch();
    const [updateUser, setUpdateUser] = useState(INITIAL_STATE_USER);
    const [errors, setErrors] = useState({});

    const { user } = useSelector(({ users }) => users);

    const handleChange = (e) => {
        setUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        setUpdateUser(user);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = formValidateUpdateUser(updateUser);

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        dispatch(updateUserAction(updateUser));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="p-4 flex flex-col gap-4">
                    <div>
                        <label htmlFor="user">Usuario</label>
                        <input
                            id="user"
                            name="user"
                            type="text"
                            placeholder="Nombre"
                            className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={handleChange}
                            value={updateUser.user}
                        />
                        {errors.user && updateUser.user === "" && (
                            <span className="text-red-500 text-sm">
                                {errors.user}
                            </span>
                        )}
                    </div>
                    <div>
                        <label htmlFor="firstName">Primer Nombre</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="Nombre"
                            className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={handleChange}
                            value={updateUser.firstName}
                        />
                        {errors.firstName && updateUser.firstName === "" && (
                            <span className="text-red-500 text-sm">
                                {errors.firstName}
                            </span>
                        )}
                    </div>
                    <div>
                        <label htmlFor="lastName">Primer Apellido</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Nombre"
                            className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={handleChange}
                            value={updateUser.lastName}
                        />
                        {errors.lastName && updateUser.lastName === "" && (
                            <span className="text-red-500 text-sm">
                                {errors.lastName}
                            </span>
                        )}
                    </div>
                    <div>
                        <label htmlFor="rol">Rol</label>
                        <select
                            id="role"
                            name="roleId"
                            className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={handleChange}
                            value={updateUser.roleId}
                        >
                            <option value="" hidden>
                                -- selecciones --
                            </option>
                            <option value="1">Admin</option>
                            <option value="2">Encargado</option>
                            <option value="3">Asesor</option>
                        </select>
                        {errors.roleId && updateUser.roleId === "" && (
                            <span className="text-red-500 text-sm">
                                {errors.roleId}
                            </span>
                        )}
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
                            onClick={() => setOpenSlide(false)}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormUpdateUser;
