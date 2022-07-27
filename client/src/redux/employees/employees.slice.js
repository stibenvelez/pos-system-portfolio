import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    employees: [],
    loadingEmployee: false,
    loading: false,
    employee: { name: "", position: "", observations: "", document: "" },
};

export const employeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        setGetEmployee: (state, action) => {
            state.loadingEmployee = true;
            state.error = false;
        },
        setGetEmployeeSuccess: (state, action) => {
            state.loadingEmployee = false;
            state.employee = action.payload;
            state.error = false;
        },
        setGetEmployeeError: (state, action) => {
            state.loadingEmployee = false;
            state.error = true;
        },
        setGetEmployees: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setGetEmployeesSuccess: (state, action) => {
            state.loading = false;
            state.employees = action.payload;
            state.error = false;
        },
        setGetEmployeesError: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        setAddEmployee: (state) => {
            state.loading = true;
            state.error = false;
        },
        setAddEmployeeSuccess: (state, action) => {
            state.loading = false;
            state.menssage = action.payload;
            state.error = false;
        },
        setAddEmployeeError: (state) => {
            state.loading = false;
            state.error = true;
        }
    }  
});

export const {
    setGetEmployee,
    setGetEmployeeSuccess,
    setGetEmployeeError,
    setGetEmployees,
    setGetEmployeesSuccess,
    setGetEmployeesError,
    setAddEmployee,
    setAddEmployeeSuccess,
    setAddEmployeeError,
} = employeesSlice.actions;

export default employeesSlice.reducer