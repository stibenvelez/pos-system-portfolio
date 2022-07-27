import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";
import {
    setGetFilters,
    setGetSalesReports,
    setGetSalesReportsError,
    setGetSalesReportsSuccess,
    setReadFilters,
} from "./reports.slice";

export const getSalesReportAction = (filters) => async (dispatch) => {
    dispatch(setGetSalesReports());
    try {
        tokenAuth();
        const result = await clienteAxios.get("/reports/", {
            params: filters,
        });
        dispatch(setGetSalesReportsSuccess(result.data));
    } catch (error) {
        console.log(error);
        dispatch(setGetSalesReportsError());
    }
};

export const getReportrFiltersAction = (filters) => async (dispatch) => {
    try {
        dispatch(setGetFilters(filters));
    } catch (error) {
        console.log(error);
    }
};
export const readFiltersAction = (filters) => async (dispatch) => {
    try {
        dispatch(setReadFilters(filters));
    } catch (error) {
        console.log(error);
    }
};
