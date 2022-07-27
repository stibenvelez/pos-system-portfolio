import connection from "../../config/db.js";
import bcrypt from "bcrypt";
import { inserUser } from "./user.DAL.js";

export const allUsers = async () => {
    try {
        const sql = `SELECT * FROM Users`;
        return await connection.query(sql);
    } catch (error) {
        throw error;
    }
};

export const FindUser = async (value) => {
    try {
        const sql = `
        SELECT 
        u.*, 
        r.role
        
        FROM Users AS u
        LEFT JOIN Roles AS r ON u.roleId = r.roleId
        WHERE u.user = '${value}'
        `;
        const [rows] = await connection.query(sql);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const finUserById = async (id) => {
    try {
        const sql = `
        SELECT 
        u.*, 
        r.role
        
        FROM Users AS u
        LEFT JOIN Roles AS r ON u.roleId = r.roleId
        WHERE u.idUser = '${id}'
        `;
        const [rows] = await connection.query(sql);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const validatePassword = async (user, passwordForm) => {
    try {
        const sql = `SELECT * FROM Users WHERE user = '${user}'`;
        const [User] = await connection.query(sql);
        return await bcrypt.compare(passwordForm, User[0].password);
    } catch (error) {}
};

export const insertNewUser = async (user) => {
    try {
        const [User] = await FindUser(user.user);
        if (User) {
            throw new Error("El usuario ya existe");
        }
        const salt = await bcrypt.genSalt(10);
        const cryptPassword = await bcrypt.hash(user.password, salt);
        user.password = cryptPassword;
        await inserUser(user);
    } catch (error) {
        logger.error(error);
    }
};
