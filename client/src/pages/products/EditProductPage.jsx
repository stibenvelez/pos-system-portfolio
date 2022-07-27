import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";



import FormNewProduct from "../../components/products/FormNewProduct";
import Template from "../../components/ui/Template";
import { getAllBrandsAction } from "../../redux/brands/brands.actions";
import { getAllProductsCategoriesAction, getProductByIdAction } from "../../redux/products/products.action";

const EditProductPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getProduct = () => dispatch(getProductByIdAction(id));
        id && getProduct();
    }, []);

    useEffect(() => {
        (() => {
            dispatch(getAllProductsCategoriesAction());
        })();
    }, []);

    useEffect(() => {
        (() => dispatch(getAllBrandsAction()))();
    }, []);

    return (
        <Template
            title={"Editar Producto"}
            description={"Edite los datos del producto"}
            className="container mx-auto"
        >
            <div className="space-y-4">
                <div>
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-gray-500 py-1 px-2 rounded-md shadow-sm text-white hover:bg-gray-400 hover:cursor-pointer"
                    >
                        Volver
                    </button>
                </div>
                <FormNewProduct />
            </div>
        </Template>
    );
};

export default EditProductPage;
