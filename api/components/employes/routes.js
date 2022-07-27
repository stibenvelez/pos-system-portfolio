import express from "express";
import checkAuth from "../../middleware/checkAuth.js";
import { checkRoleAuth } from "../../middleware/checkRoleAuth.js";
import {
    createNewEmploye,
    getAllEmployees,
    getEmployeById,
} from "./employeController.js";
const router = express.Router();

router.get(
    "/",
    checkAuth,
    checkRoleAuth(["admin", "encargado", "visitante"]),
    getAllEmployees
);
router.get(
    "/:id",
    checkAuth,
    checkRoleAuth(["admin", "encargado", "visitante"]),
    getEmployeById
);
router.post(
    "/",
    checkAuth,
    checkRoleAuth(["admin", "encargado"]),
    createNewEmploye
);

export default router;
