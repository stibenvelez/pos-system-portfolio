import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} from "graphql";

export const SaleType = new GraphQLObjectType({
    name: "Sale",
    fields: () => ({
        id: { type: GraphQLInt },
        idClient: { type: GraphQLInt },
        idStateSale: { type: GraphQLInt },
        document: { type: GraphQLInt },
        totalPrice: { type: GraphQLInt },
        observations: { type: GraphQLString },
    }),
});
