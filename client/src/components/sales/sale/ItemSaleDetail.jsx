import React from 'react'

const ItemSaleDetail = ({ saleDetail }) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row"  className="px-6 py-4">
                {saleDetail.product}
            </th>
            <td scope="row" className="px-6 py-4text-gray-900">
                {saleDetail.quantity}
            </td>
            <td scope="row" className="px-6 py-4text-gray-900">
                {saleDetail.unitPrice}
            </td>
            <td scope="row" className="px-6 py-4text-gray-900">
                {saleDetail.totalPrice}
            </td>
            <td scope="row" className="px-6 py-4text-gray-900">
                {saleDetail.brand}
            </td>
            <td scope="row" className="px-6 py-4text-gray-900">
                {saleDetail.name}
            </td>
        </tr>
    );
};

export default ItemSaleDetail