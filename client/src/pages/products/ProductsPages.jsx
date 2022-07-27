import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import FilterOptions from "../../components/products/FilterOptions";
import ProductsList from "../../components/products/ProductsList";
import Template from "../../components/ui/Template";
import { getAllProductsActions } from "../../redux/products/products.action";
import socket from "../../helpers/Socket";

const ProductsPages = () => {
    const dispatch = useDispatch();
    const filters = useSelector(({ products }) => products.filters);

    useEffect(() => {
        dispatch(getAllProductsActions(filters)), [filters];
    });

    useEffect(() => {
        socket.on("loadProducts", () => {
            dispatch(getAllProductsActions(filters));
        });
    }, [socket]);

    return (
        <Template
            title={"Productos"}
            description={"Administre aqui los productos de la empresa"}
        >
            <div className="flex flex-col gap-4">
                <div>
                    <FilterOptions />
                </div>

                <div className="grid grid-cols-1">
                    <ProductsList />
                </div>
            </div>
        </Template>
    );
};

export default ProductsPages;
