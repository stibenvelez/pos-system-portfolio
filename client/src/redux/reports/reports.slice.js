import { createSlice } from "@reduxjs/toolkit";
import { formatDate } from "../../helpers/FormatDate";

const firtMonthDay = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
);

const lastDay = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
);


const initialState = {
    sales: [],
    loading: true,
    filters: {
        dateFrom: formatDate(firtMonthDay),
        dateTo: formatDate(lastDay),
    },
};

export const reportsSlice = createSlice({
    name: "reports",
    initialState,
    reducers: {
        setGetSalesReports: (state, action) => {
            state.loading = true;
        },
        setGetSalesReportsSuccess: (state, action) => {
            state.loading = false;
            state.sales = action.payload;
            state.error = false;
        },
        setGetSalesReportsError: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        setGetFilters: (state, action) => {
            state.loading = false;
            state.filters = action.payload;
        },
        setReadFilters: (state, action) => {
            state.loading = false;
            state.filters = action.payload;
        },
    },
});

export const {
    setGetSalesReports,
    setGetSalesReportsSuccess,
    setGetSalesReportsError,
    setGetFilters,
    setReadFilters,
} = reportsSlice.actions;

export default reportsSlice.reducer;