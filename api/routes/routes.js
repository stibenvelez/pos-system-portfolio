import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "../graphql/index.js";
const routes = express.Router();

import salesRoutes from '../components/sales/routes.js'
import salesDetailsRoutes from "../components/salesDetails/routes.js";
import productsRoutes from '../components/products/routes.js'
import productCategory from '../components/productCategory/routes.js'
import employeesRoutes from '../components/employes/routes.js'
import usersRoutes from '../components/users/routes.js'
import reportsRoutes from '../components/reports/routes.js'
import egressesRoutes from '../components/egresses/routes.js'
import brandsRoutes from '../components/brands/routes.js'


routes.use("/users", usersRoutes);
routes.use("/sales", salesRoutes);
routes.use("/sales-details", salesDetailsRoutes);
routes.use("/products", productsRoutes);
routes.use("/product-categories", productCategory);
routes.use("/employees", employeesRoutes);
routes.use("/reports", reportsRoutes);
routes.use("/egresses", egressesRoutes);
routes.use("/egresses", egressesRoutes);
routes.use("/egresses/categories", egressesRoutes);
routes.use("/brands", brandsRoutes);

routes.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

export default routes 