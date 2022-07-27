const router = express.Router();
import checkAuth from "../../middleware/checkAuth.js";
import express from "express";
import {
    getAllUsers,
    createNewUser,
    auth,
    forgetPassword,
    getUser,
    updateUser,
    updatePassword,
} from "./userController.js";
import { checkRoleAuth } from "../../middleware/checkRoleAuth.js";

router.get(
    "/",
    checkAuth,
    checkRoleAuth(["admin", "encargado", "visitante"]),
    getAllUsers
);
router.post(
    "/",
    checkAuth,
    checkRoleAuth(["admin", "encargado"]),
    createNewUser
);
router.post("/login", auth);
router.post("/forget-password", forgetPassword);
router.get("/profile", checkAuth, checkRoleAuth(["public"]), getUser);
router.put("/new-password/:id", checkAuth, updatePassword);
router.get("/:id", checkAuth, getUser);
router.put(
    "/:id",
    checkAuth,
    checkRoleAuth(["admin", "encargado"]),
    updateUser
);

export default router;
