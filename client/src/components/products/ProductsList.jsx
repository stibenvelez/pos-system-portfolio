import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../ui/Spinners/Spinner";
import ItemProduct from "./ItemProduct";
import { Table, Thead } from "../ui/Table";
import SkeletonTable from "../../shared/SkeletonTable";
const ProductsList = () => {
    const { products, loading } = useSelector(({ products }) => products);

    if (loading)
        return (
            <div className="w-full justify-center">
                <SkeletonTable columns={6} rows={4} paddingYRows={8} />
            </div>
        );

    if (products.length === 0 && !loading) {
        return (
            <div className="p-5 py-3 text-sm text-yellow-800 border border-yellow-200 shadow-md bg-amber-100">
                <p>No se encontraron resultados</p>
            </div>
        );
    }

    return (
        <Table>
            <Thead>
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Producto
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Costo unitario
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Precio de venta
                    </th>
                    <th scope="col" className="px-6 py-3">
                        % de comision
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Estado
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Accions
                    </th>
                </tr>
            </Thead>
            <tbody>
                {products.map((productData) => (
                    <ItemProduct
                        productData={productData}
                        key={productData.idProduct}
                    />
                ))}
            </tbody>
        </Table>
    );
};

export default ProductsList;
