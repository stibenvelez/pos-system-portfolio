import express from "express";
import checkAuth from "../../middleware/checkAuth.js";
import { checkRoleAuth } from "../../middleware/checkRoleAuth.js";
import { getAllBrands, inserNewBrand } from "./brand.controller.js";

const router = express.Router();

router.get("/", checkAuth, checkRoleAuth(["public"]), getAllBrands);
router.post(
    "/",
    checkAuth,
    checkRoleAuth(["admin", "encargado", "asesor"]),
    inserNewBrand
);

export default router;
