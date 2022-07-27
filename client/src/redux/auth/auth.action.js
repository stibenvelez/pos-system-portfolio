import clienteAxios from "../../config/axios";
import {
    setAuth,
    setAuthSuccess,
    setAuthError,
    setLogin,
    setLoginError,
    setLoginSuccess,
    signOut,
    signOutSuccess,
} from "./auth.slice";

export const authAction = () => {
    return async (dispatch) => {
        dispatch(setAuth());
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("No hay token");
            }
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            const result = await clienteAxios.get("/users/profile", config);
            dispatch(setAuthSuccess(result.data));
        } catch (error) {
            dispatch(setAuthError());
        }
    };
};

export const loginAction = (user) => {
    return async (dispatch) => {
        dispatch(setLogin());
        try {
            const { data } = await clienteAxios.post("/users/login", user);
            localStorage.setItem("token", data.token);
            dispatch(setLoginSuccess(data));
        } catch (error) {
            dispatch(setLoginError(error.response.data.msg));
        }
    };
};

export const singOutAction = () => {
    return async (dispatch) => {
        dispatch(signOut());
        try {
            localStorage.removeItem("token");
            dispatch(signOutSuccess());
        } catch (error) {
            console.log(error);
        }
    };
};
