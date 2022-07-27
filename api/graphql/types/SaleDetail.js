import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} from "graphql";

export const SaleDetailType = new GraphQLObjectType({
    name: "SaleDetail",
    fields: () => ({
        idSaleDetail: { type: GraphQLInt },
        idSale: { type: GraphQLInt },
        idCategory: { type: GraphQLInt },
        IdProduct: { type: GraphQLInt },
        quantity: { type: GraphQLInt },
        unitPrice: { type: GraphQLInt },
        totalPrice: { type: GraphQLInt },
        idEmploye: { type: GraphQLInt },
        commissionValue: { type: GraphQLInt },
        commissionPercentage: { type: GraphQLInt },
        observations: { type: GraphQLString },
    }),
});
