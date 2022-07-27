import jwt from "jsonwebtoken";

const generateJWT = ({ idUser , user}) => {
    return jwt.sign({ idUser, user }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

export default generateJWT;
