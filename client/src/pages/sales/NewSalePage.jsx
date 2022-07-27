import { useEffect, useState } from "react";
import FormNewSale from "../../components/sales/newSale/FormNewSale";
import { useDispatch } from "react-redux";
import { getAllProductsActions } from "../../redux/products/products.action";
import Template from "../../components/ui/Template";

const NewSalePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        (() => dispatch(getAllProductsActions()))();
    }, []);

    return (
        <Template title="Nuevo ingreso" description="Registre una nueva venta">
            <FormNewSale />
        </Template>
    );
};

export default NewSalePage;
