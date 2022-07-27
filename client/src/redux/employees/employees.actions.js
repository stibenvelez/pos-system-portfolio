import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";
import Swal from "sweetalert2"
import {
    setAddEmployee,
    setAddEmployeeError,
    setAddEmployeeSuccess,
    setGetEmployee,
    setGetEmployeeError,
    setGetEmployees,
    setGetEmployeesError,
    setGetEmployeesSuccess,
    setGetEmployeeSuccess,
} from "./employees.slice";

export const getAllEmployeesAction = () => async (dispatch) => {
    dispatch(setGetEmployees());
    try {
        tokenAuth();
        const res = await clienteAxios("/employees");
        dispatch(setGetEmployeesSuccess(res.data));
    } catch (error) {
        dispatch(setGetEmployeesError());
    }
};

export const addNewEmployeAction = (employe) => async (dispatch) => {
    dispatch(setAddEmployee());
 
    try {
        tokenAuth();
        const res = await clienteAxios.post("/employees", employe);
        dispatch(setAddEmployeeSuccess(res.data));
    } catch (error) {
        dispatch(setAddEmployeeError());
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

export const getEmployeeByIdAction = (id) => async (dispatch) => {
    dispatch(setGetEmployee());
    try {
        tokenAuth();
        const res = await clienteAxios.get(`/employees/${id}`);
        dispatch(setGetEmployeeSuccess(res.data));
    } catch (error) {
        dispatch(setGetEmployeeError());
    }
};
