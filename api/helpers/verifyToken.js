import jwt from "jsonwebtoken";

export const veryfyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        console.log(error);
        return false;
    }
};
