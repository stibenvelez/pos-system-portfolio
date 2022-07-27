import Swal from "sweetalert2";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";
import {
    setAddEgress,
    setAddEgressError,
    setAddEgressSuccess,
    setEGresses,
    setEGressesError,
    setEGressesSuccess,
    setGetEgress,
    setGetEgressError,
    setGetEgressesCategories,
    setGetEgressesCategoriesError,
    setGetEgressesCategoriesSuccess,
    setGetEgressesSubcategories,
    setGetEgressesSubcategoriesError,
    setGetEgressesSubcategoriesSuccess,
    setGetEgressSuccess,
} from "./egresses.slice";

export const getAllEgressesAction = () => async (dispatch) => {
    dispatch(setEGresses());
    try {
        tokenAuth();
        const response = await clienteAxios.get("/egresses");
        dispatch(setEGressesSuccess(response.data));
    } catch (error) {
        dispatch(setEGressesError(error.response.data.message));
    }
};

export const getEgressByIdAction = (id) => async (dispatch) => {
    dispatch(setGetEgress());
    try {
        tokenAuth();
        const response = await clienteAxios.get(`/egresses/${id}`);
        dispatch(setGetEgressSuccess(response.data));
    } catch (error) {
        dispatch(setGetEgressError(error.response.data.message));
    }
};

export const getAllEgressesCategoriesAction = () => async (dispatch) => {
    dispatch(setGetEgressesCategories());
    try {
        tokenAuth();
        const response = await clienteAxios.get("/egresses/categories");
        dispatch(setGetEgressesCategoriesSuccess(response.data));
    } catch (error) {
        console.log(error);
        dispatch(setGetEgressesCategoriesError());
    }
};

export const getAllEgressesSubCategoriesAction = () => async (dispatch) => {
    dispatch(setGetEgressesSubcategories());
    try {
        tokenAuth();
        const response = await clienteAxios.get("/egresses/subcategories");
        dispatch(setGetEgressesSubcategoriesSuccess(response.data));
    } catch (error) {
        console.log(error);
        dispatch(setGetEgressesSubcategoriesError());
    }
};

export const addNewEgressAction = (egress) => async (dispatch) => {
    dispatch(setAddEgress());
    try {
        tokenAuth();
        const response = await clienteAxios.post("/egresses", egress);
        Swal.fire({
            title: `Egreso registrado`,
            text: "Se registró el egreso con exito",
            icon: "success",
        });
        dispatch(setAddEgressSuccess(response.data));
    } catch (error) {
        console.log(error);
        dispatch(setAddEgressError());
        if (error.response.data.msg) {
            Swal.fire({
                title: "Error",
                text: error.response.data.msg,
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    }
};
