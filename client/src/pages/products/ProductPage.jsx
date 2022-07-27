import React, { useEffect } from "react";

import Template from "../../components/ui/Template";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import { getProductByIdAction } from "../../redux/products/products.action";
import ProductDetail from "../../components/products/ProductDetail";

const ProductPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getProductByIdAction(id));
    }, []);

    return (
        <Template
            title="Informacion del producto"
            description="Informacion detalalda del producto"
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
                <ProductDetail />
            </div>
        </Template>
    );
};

export default ProductPage;
