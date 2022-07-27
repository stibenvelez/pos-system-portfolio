import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    egress:{},
    egresses: [],
    egressesCategories: [],
    egressesSubcategories: [],
    loading: false,
    error: null,
};

export const egressesSlice = createSlice({
    name: "egresses",
    initialState,
    reducers: {
        setEGresses: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setEGressesSuccess: (state, action) => {
            state.loading = false;
            state.egresses = action.payload;
            state.error = false;
        },
        setEGressesError: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        setGetEgress: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setGetEgressSuccess: (state, action) => {
            state.loading = false;
            state.egress = action.payload;
            state.error = false;
        },
        setGetEgressError: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        setGetEgressesCategories: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setGetEgressesCategoriesSuccess: (state, action) => {
            state.loading = false;
            state.egressesCategories = action.payload;
            state.error = false;
        },
        setGetEgressesCategoriesError: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        setGetEgressesSubcategories: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setGetEgressesSubcategoriesSuccess: (state, action) => {
            state.loading = false;
            state.egressesSubcategories = action.payload;
            state.error = false;
        },
        setGetEgressesSubcategoriesError: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        setAddEgress: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setAddEgressSuccess: (state, action) => {
            state.loading = false;
            state.error = false;
        },
        setAddEgressError: (state, action) => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {
    setEGresses,
    setEGressesSuccess,
    setEGressesError,
    setGetEgress,
    setGetEgressSuccess,
    setGetEgressError,
    setGetEgressesCategories,
    setGetEgressesCategoriesSuccess,
    setGetEgressesCategoriesError,
    setGetEgressesSubcategories,
    setGetEgressesSubcategoriesSuccess,
    setGetEgressesSubcategoriesError,
    setAddEgress,
    setAddEgressSuccess,
    setAddEgressError,
} = egressesSlice.actions;

export default egressesSlice.reducer;
