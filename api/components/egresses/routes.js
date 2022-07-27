import express from 'express'
import checkAuth from '../../middleware/checkAuth.js';
import { checkRoleAuth } from '../../middleware/checkRoleAuth.js';
import {
    addNewEgress,
    getAllEgresses,
    getAllEgressesCategories,
    getAllEgressesSubcategories,
    getEgressById,
} from "./egresses.controller.js";

const router = express.Router()

router.get(
    "/",
    checkAuth,
    checkRoleAuth(["public"]),
    getAllEgresses
);
router.get(
    "/categories",
    checkAuth,
    checkRoleAuth(["public"]),
    getAllEgressesCategories
);
router.get(
    "/subcategories",
    checkAuth,
    checkRoleAuth(["public"]),
    getAllEgressesSubcategories
);
router.get(
    "/:id",
    checkAuth,
    checkRoleAuth(["public"]),
    getEgressById
);
router.post(
    "/",
    checkAuth,
    checkRoleAuth(["admin", "encargado", "asesor"]),
    addNewEgress
);


export default router