import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';


export const ProductType = new GraphQLObjectType({
    name: "Product",
    fields: () => ({
        idProduct: { type: GraphQLInt },
        product: { type: GraphQLString },
        unitPrice: { type: GraphQLInt },
        unitCost: { type: GraphQLInt },
        commissionPercentage: { type: GraphQLInt },
        commissionValue: { type: GraphQLInt },
    }),
});