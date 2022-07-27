import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    product: {},
    error: null,
    loading: false,
    loadingProductCategory: false,
    filters: {
        category: "",
    },
    productsCategories: [],
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setGetProduct: (state, action) => {
            state.product = {},
            state.loading = true;
            state.error = false;
        },
        setGetProductSuccess: (state, action) => {
            state.loading = false;
            state.product = action.payload;
            state.error = false;
        },
        setGetProductError: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        setGetProducts: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setGetProductsSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.error = false;
        },
        setGetProductsError: (state) => {
            state.loading = false;
            state.error = true;
        },
        setFilterProducts: (state, action) => {
            state.filters = action.payload;
        },
        setEditProduct: (state) => {
            state.loading = true;
            state.error = false;
        },
        setEditProductSuccess: (state) => {
            state.loading = false;
            state.error = false;
        },
        setEditProductError: (state) => {
            state.loading = false;
            state.error = true;
        },
        setAddNewProduct: (state) => {
            state.loading = true;
            state.error = false;
        },
        setAddNewProductSuccess: (state, action) => {
            state.loading = false;
            state.msg = action.payload;
        },
        setAddNewProductError: (state, action) => {
            state.loading = false;
            state.msg = action.payload;
        },
        setDisableProduct: (state, action) => {
            state.loading = false;
        },
        setDisableProductSuccess: (state, action) => {
            state.loading = false;
        },
        setDisableProductError: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        setGetProductCategory: (state, action) => {
            state.loadingProductCategory = true;
            state.error = false;
        },
        setGetProductCategorySuccess: (state, action) => {
            state.loadingProductCategory = false;
            state.productsCategories = action.payload;
        },
        setGetProductCategoryError: (state) => {
            state.loadingProductCategory = false;
            state.error = true;
        },
        setDeleteImage: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setDeleteImageSuccess: (state, action) => {
            state.loading = false;
            state.error = false;
        },
        setDeleteImageError: (state, action) => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {
    setGetProduct,
    setGetProductSuccess,
    setGetProductError,
    setGetProducts,
    setGetProductsSuccess,
    setGetProductsError,
    setFilterProducts,
    setEditProduct,
    setEditProductSuccess,
    setEditProductError,
    setAddNewProduct,
    setAddNewProductSuccess,
    setAddNewProductError,
    setDisableProduct,
    setDisableProductSuccess,
    setDisableProductError,
    setGetProductCategory,
    setGetProductCategorySuccess,
    setGetProductCategoryError,
    setDeleteImage,
    setDeleteImageSuccess,
    setDeleteImageError,
} = productsSlice.actions;

export default productsSlice.reducer;
