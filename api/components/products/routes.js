import express from "express";
import {
    AddnewProduct,
    getAllProducts,
    getProductById,
    editProductById,
    disableProductById,
    deleteImage,
} from "./productsController.js";
import { uploadImage } from "../../middleware/uploadFile.js";
import checkAuth from "../../middleware/checkAuth.js";
import { checkRoleAuth } from "../../middleware/checkRoleAuth.js";

const router = express.Router();

router.get("/", checkAuth, checkRoleAuth(["public"]), getAllProducts);
router.get("/:id", checkAuth, checkRoleAuth(["public"]), getProductById);
router.post(
    "/",
    checkAuth,
    checkRoleAuth(["admin", "encargado", "asesor"]),
    uploadImage,
    AddnewProduct
);
router.put(
    "/:id",
    checkAuth,
    checkRoleAuth(["admin", "encargado"]),
    uploadImage,
    editProductById
);
router.put(
    "/disable/:id",
    checkAuth,
    checkRoleAuth(["admin", "encargado"]),
    disableProductById
);
router.put(
    "/delete-image/:id",
    checkAuth,
    checkRoleAuth(["admin", "encargado"]),
    deleteImage
);

export default router;
