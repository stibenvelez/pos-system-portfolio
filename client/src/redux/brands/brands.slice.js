import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    brands: [],
    loading: false,
    error: false,
};

export const brandsSlice = createSlice({
    name: "brands",
    initialState,
    reducers: {
        setGetAllBrands: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setGetAllBrandsSuccess: (state, action) => {
            state.loading = false;
            state.brands = action.payload;
            state.error = false;
        },
        setGetAllBrandsError: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        setAddNewBrand: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setAddNewBrandSuccess: (state, action) => {
            state.loading = false;
            state.error = false;
        },
        setAddNewBrandError: (state, action) => {
            state.loading = false;
            state.error = true;
            
        }
    }   
});

export const {
    setGetAllBrands,
    setGetAllBrandsSuccess,
    setGetAllBrandsError,
    setAddNewBrand,
    setAddNewBrandSuccess,
    setAddNewBrandError,
} = brandsSlice.actions;

export default brandsSlice.reducer;
