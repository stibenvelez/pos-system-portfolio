import express from "express";
import checkAuth from "../../middleware/checkAuth.js";
import { checkRoleAuth } from "../../middleware/checkRoleAuth.js";
const router = express.Router();

import {getAllCategoryProducts} from './productController.js'

router.get(
    "/",
    checkAuth,
    checkRoleAuth(["public"]),
    getAllCategoryProducts
);


export default router;