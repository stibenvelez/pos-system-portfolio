import express from "express";
const router = express.Router();
import {
    cancelSaleById,
    createNewSale,
    getAllSales,
    getSaleById,
} from "./saleController.js";
import checkAuth from "../../middleware/checkAuth.js";
import { checkRoleAuth } from "../../middleware/checkRoleAuth.js";

router.get("/", checkAuth, checkRoleAuth(["public"]), getAllSales);
router.get("/:id", checkAuth, checkRoleAuth(["public"]), getSaleById);
router.post(
    "/",
    checkAuth,
    checkRoleAuth(["admin", "encargado", "asesor"]),
    createNewSale
);
router.put(
    "/cancel-sale",
    checkAuth,
    checkRoleAuth(["admin", "encargado", "asesor"]),
    cancelSaleById
);

export default router;
