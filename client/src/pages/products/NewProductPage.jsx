import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormNewProduct from "../../components/products/FormNewProduct";
import Template from "../../components/ui/Template";
import { getAllBrandsAction } from "../../redux/brands/brands.actions";
import { getAllProductsCategoriesAction } from "../../redux/products/products.action";

const NewProductPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        (() => {
            dispatch(getAllProductsCategoriesAction());
        })();
    }, []);

    useEffect(() => {
        (() => dispatch(getAllBrandsAction()))();
    }, []);

    const product = useSelector(({ products }) => products.product);

    return (
        <Template
            title={"Nuevo Producto"}
            description={"Agregue aquí un nuevo producto"}
        >
            <div>
                <FormNewProduct />
            </div>
        </Template>
    );
};

export default NewProductPage;
