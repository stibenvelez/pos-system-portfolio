import express from "express";
import checkAuth from "../../middleware/checkAuth.js";
import { checkRoleAuth } from "../../middleware/checkRoleAuth.js";
import { getAllSalesReport } from "./saleReportController.js";
const router = express.Router();

router.get(
    "/",
    checkAuth,
    checkRoleAuth(["public"]),
    getAllSalesReport
);

export default router;