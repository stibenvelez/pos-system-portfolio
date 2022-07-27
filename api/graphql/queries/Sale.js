import { GraphQLInt, GraphQLList } from 'graphql'
import { SaleType } from '../types/Sale.js'
import {allSales }from '../../components/sales/saleDAL.js'

export const GET_ALL_SALES = {
    type: new GraphQLList(SaleType),
    args: { id: { type: GraphQLInt } },
    resolve: async (parent, args) => {
        const filters = {
            state: 1,
        };
        const [rows] = await allSales(filters);
        return rows;
    }
}