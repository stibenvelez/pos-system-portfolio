import { configureStore } from "@reduxjs/toolkit";
import auth from './auth/auth.slice';
import reports from './reports/reports.slice';
import sales from './sales/sales.slice';
import products from './products/products.slice';
import brands from './brands/brands.slice';
import employees from './employees/employees.slice';
import egresses from './egresses/egresses.slice';
import users from './users/users.slice';

export const store = configureStore({
    reducer: {
        auth,
        reports,
        sales,
        products,
        brands,
        employees,
        egresses,
        users
    },
});  