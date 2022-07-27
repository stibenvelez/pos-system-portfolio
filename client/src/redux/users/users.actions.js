import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";
import Swal from "sweetalert2";
import {
    setGetAllUsers,
    setGetAllUsersError,
    setGetAllUsersSuccess,
    setGetUserById,
    setGetUserByIdError,
    setGetUserByIdSuccess,
    setUpdatePassword,
    setUpdatePasswordError,
    setUpdatePasswordSuccess,
    setUpdateUser,
    setUpdateUserError,
    setUpdateUserSuccess,
} from "./users.slice";

export const getAllUsersAction = () => async (dispatch) => {
    dispatch(setGetAllUsers());
    try {
        tokenAuth();
        const { data } = await clienteAxios.get("/users");
        dispatch(setGetAllUsersSuccess(data));
    } catch (error) {
        dispatch(setGetAllUsersError());
    }
};

export const getUserByIdAction = (id) => async (dispatch) => {
    dispatch(setGetUserById());
    try {
        tokenAuth();
        const { data } = await clienteAxios.get(`/users/${id}`);
        dispatch(setGetUserByIdSuccess(data));
    } catch (error) {
        dispatch(setGetUserByIdError());
    }
};

export const updateUserAction = (user) => async (dispatch) => {
    dispatch(setUpdateUser());
    try {
        tokenAuth();
        await clienteAxios.put(`/users/${user.idUser}`, user);
        dispatch(setUpdateUserSuccess());
        dispatch(getUserByIdAction(user.idUser));
        Swal.fire({
            title: "Usuario actualizado",
            text: "El usuario ha sido actualizado correctamente",
            icon: "success",
        });
    } catch (error) {
        console.log(error);
                if (error.response.data.msg) {
                    Swal.fire({
                        title: "Error",
                        text: error.response.data.msg,
                        icon: "error",
                        confirmButtonText: "Ok",
                    });
                }
        dispatch(setUpdateUserError());
    }
};

export const updatePasswordAction = (user) => async (dispatch) => {
    dispatch(setUpdatePassword());
    try {
        tokenAuth();
        await clienteAxios.put(`/users/new-password/${user.idUser}`, user);
        dispatch(setUpdatePasswordSuccess());
        Swal.fire({
            title: "Contraseña actualizada",
            text: "La contraseña ha sido actualizada correctamente",
            icon: "success",
        });
    } catch (error) {
        console.log(error);
        dispatch(setUpdatePasswordError());
        Swal.fire({
            title: error.response.data.msg,
            icon: "error",
        });
    }
}