
import { GraphQLInt, GraphQLString } from "graphql";
import { ProductType } from "../types/Product.js";

export const CREATE_PRODUCT = {
    type: ProductType,
    arg: {
        product: { type: GraphQLString }
    },
    resolve: async (_, args) => {
        const { product } = args
        return args;
    }
};