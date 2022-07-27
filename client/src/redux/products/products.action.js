import Swal from "sweetalert2";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";
import socket from "../../helpers/Socket";
import {
    setAddNewProduct,
    setAddNewProductError,
    setAddNewProductSuccess,
    setDeleteImage,
    setDeleteImageError,
    setDeleteImageSuccess,
    setDisableProduct,
    setDisableProductError,
    setDisableProductSuccess,
    setEditProduct,
    setEditProductError,
    setEditProductSuccess,
    setFilterProducts,
    setGetProduct,
    setGetProductCategory,
    setGetProductCategoryError,
    setGetProductCategorySuccess,
    setGetProductError,
    setGetProducts,
    setGetProductsError,
    setGetProductsSuccess,
    setGetProductSuccess,
} from "./products.slice";

// get products
export const getAllProductsActions = (filters) => async (dispatch) => {
    dispatch(setGetProducts());
    try {
        tokenAuth();
        const res = await clienteAxios.get("/products", {
            params: filters,
        });
        dispatch(setGetProductsSuccess(res.data));
    } catch (error) {
        console.log(error);
        dispatch(setGetProductsError());
    }
};

// GET PRODUCT BY ID
export const getProductByIdAction = (id) => async (dispatch) => {
    dispatch(setGetProduct());

    try {
        tokenAuth();
        const res = await clienteAxios.get(`/products/${id}`);
        dispatch(setGetProductSuccess(res.data[0]));
    } catch (error) {
        console.log(error);
        dispatch(setGetProductError());
    }
};

// EDIT PRODUCT BY ID
export const editProductByIdAction = (productData) => {
    return async (dispatch) => {
        dispatch(setEditProduct());
        try {
            const data = new FormData();
            productData.idProduct &&
                data.append("idProduct", productData.idProduct);
            data.append("product", productData.product);
            data.append("brandId", productData.brandId);
            data.append("idProductCategory", productData.idProductCategory);
            data.append(
                "commissionPercentage",
                productData.commissionPercentage
            );
            data.append("unitCost", productData.unitCost);
            data.append("unitPrice", productData.unitPrice);
            data.append("observations", productData.observations);
            data.append("image", productData.image);
            tokenAuth();
            const idProduct = data.get("idProduct");
            const res = await clienteAxios.put(`/products/${idProduct}`, data);
            dispatch(setEditProductSuccess(res.data[0]));
            dispatch(getProductByIdAction(productData.idProduct));
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
            dispatch(setEditProductError());
        }
    };
};

//ADD NEW PRODUCT
export const addNewProductAction = (productData) => async (dispatch) => {
    const data = new FormData();
    data.append("product", productData.product);
    data.append("brandId", productData.brandId);
    data.append("idProductCategory", productData.idProductCategory);
    data.append("commissionPercentage", productData.commissionPercentage);
    data.append("unitCost", productData.unitCost);
    data.append("unitPrice", productData.unitPrice);
    data.append("observations", productData.observations);
    productData.image && data.append("image", productData.image);

    dispatch(setAddNewProduct());
    try {
        tokenAuth();
        await clienteAxios.post(`/products`, data);
        dispatch(setAddNewProductSuccess());
    } catch (error) {
        dispatch(setAddNewProductError(error));
    }
};

// FILTERS PRODUCT
export const filterProductsAction = (filters) => {
    return async (dispatch) => {
        dispatch(setFilterProducts(filters));
    };
};

// DISABLE PRODUCT
export const disableProductAction = (id) => async (dispatch) => {
    dispatch(setDisableProduct());
    try {
        tokenAuth();
        await clienteAxios.put(`/products/disable/${id}`);
        dispatch(setDisableProductSuccess());
        socket.emit("createdProduct");
    } catch (error) {
        dispatch(setDisableProductError());
    }
};

export const getAllProductsCategoriesAction = () => async (dispatch) => {
    dispatch(setGetProductCategory());
    try {
        tokenAuth();
        const res = await clienteAxios("/product-categories");
        dispatch(setGetProductCategorySuccess(res.data));
    } catch (error) {
        console.log(error);
        dispatch(setGetProductCategoryError());
    }
};

export const deleteImageAction = (id) => async (dispatch) => {
    dispatch(setDeleteImage());
    try {
        tokenAuth();
        await clienteAxios.put(`/products/delete-image/${id}`);
        dispatch(setDeleteImageSuccess());
        Swal.fire({
            title: "Imagen eliminada",
            text: "La imagen ha sido eliminada correctamente",
            icon: "success",
        });
        dispatch(getProductByIdAction(id));
    } catch (error) {
        console.log(error);
        dispatch(setDeleteImageError());
    }
};
