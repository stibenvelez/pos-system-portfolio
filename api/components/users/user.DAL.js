import connection from "../../config/db.js";

export const inserUser = async ({
    user,
    password,
    email,
    firstName,
    lastName,
    roleId,
    token,
}) => {
    try {
        const sql = `INSERT INTO Users
                        (user,
                        password,
                        email,
                        firstName,
                        lastName,
                        roleId,
                        token)
                    VALUES ('${user}', '${password}', '${email}', '${firstName}', '${lastName}', ${roleId}, '${token}')    
                    `;

        return await connection.query(sql);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const updateUserById = async ({
    idUser,
    user,
    email,
    firstName,
    lastName,
    roleId,
}) => {
    try {
        const sql = `UPDATE Users
                        SET user = '${user}',
                        email = '${email}',
                        firstName = '${firstName}',
                        lastName = '${lastName}',
                        roleId = ${roleId}
                        WHERE idUser = ${idUser}
                    `;

        return await connection.query(sql);
    } catch (error) {
        throw error;
    }
};

export const updatePasswordById = async (idUser, newPassword ) => { 
    try {
        const sql = `UPDATE Users
                        SET password = '${newPassword}'
                        WHERE idUser = ${idUser}
                    `;

        return await connection.query(sql);
    } catch (error) {
        throw error;
    }
}
