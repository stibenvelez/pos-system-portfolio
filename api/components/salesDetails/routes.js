import express from "express";
import checkAuth from "../../middleware/checkAuth.js";
import { checkRoleAuth } from "../../middleware/checkRoleAuth.js";
import {
    getAllSaleDetails,
    getSailDetailByIdSale,
} from "./salesDetails.controller.js";

const router = express.Router();

router.get("/", checkAuth, checkRoleAuth(["public"]), getAllSaleDetails);
router.get(
    "/search-by-idsale/:id",
    checkAuth,
    checkRoleAuth(["public"]),
    getSailDetailByIdSale
);

export default router;
