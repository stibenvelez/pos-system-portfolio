import {
    allUsers,
    FindUser,
    finUserById,
    insertNewUser,
    validatePassword,
} from "./userServices.js";
import generarId from "../../helpers/generarId/generarId.js";
import generateJWT from "../../helpers/generateJWT/generatejwt.js";
import bcrypt from "bcrypt";
import { updatePasswordById, updateUserById } from "./user.DAL.js";

export const getAllUsers = async (req, res) => {
    try {
        const [rows] = await allUsers();
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "hubo un error" });
    }
};

export const createNewUser = async (req, res) => {
    // DOTO evit duplicate registers
    req.body.token = generarId();
    try {
        await insertNewUser(req.body);
        res.json({ msg: "usuario creado" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "hubo un error", error });
    }   
};

export const auth = async (req, res) => {
    try {
        const { user, password } = req.body;

        /// exist user
        const [User] = await FindUser(user);
        if (!User) {
            const error = new Error("El usuario no existe");
            res.status(404).json({ msg: error.message });
            return;
        }
        // comfirmed user
        if (!User.confirm) {
            const error = new Error("Tu cuenta no ha sido confirmada");
            res.status(403).json({ msg: error.message });
            return;
        }

        // valid password
        if (!(await validatePassword(user, password))) {
            const error = new Error("El password es incorrecto");
            res.status(403).json({ msg: error.message });
            return;
        }

        res.json({
            idUser: User.idUser,
            user: User.user,
            firstName: User.firstName,
            lastName: User.lastName,
            email: User.email,
            idRoll: User.idRoll,
            token: generateJWT({ idUser: User.idUser, user: User.user }),
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "hubo un error" });
    }
};

export const forgetPassword = async (req, res) => {
    const { user } = req.body;
    /// exist user
    const [User] = await FindUser(user);

    if (!User) {
        const error = new Error("El usuario no existe");
        res.status(404).json({ msg: error.message });
    }

    try {
        User.token = generarId();
        //TODO terminar funcionalidad
    } catch (error) {}
};

export const getUser = async (req, res) => {
    const { user } = req;
    res.json(user);
};

export const updateUser = async (req, res) => {
    const user = req.body;

    try {
        const [User] = await finUserById(user.idUser);
        if (!User) {
            const error = new Error("El usuario no existe");
            res.status(404).json({ msg: error.message });
            return;
        }

        await updateUserById(user);
        res.json({ msg: "usuario actualizado" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "hubo un error" });
    }
};

export const updatePassword = async (req, res) => {
    const { idUser, newPassword, passwordConfirm, currentPassword } = req.body;

    try {
        const [User] = await finUserById(idUser);

        if (!User) {
            const error = new Error("El usuario no existe");
            res.status(404).json({ msg: error.message });
            return;
        }

        if (!await bcrypt.compare(currentPassword, User.password)) {
            const error = new Error("El password es incorrecto");
            res.status(403).json({ msg: error.message });
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const cryptPassword = await bcrypt.hash(newPassword, salt);

        if (newPassword !== passwordConfirm) {
            const error = new Error("Las contraseñas no coinciden");
            res.status(403).json({ msg: error.message });
            return;
        }

        await updatePasswordById(idUser, cryptPassword);
        res.json({ msg: "password actualizado" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "hubo un error" });
    }
};
