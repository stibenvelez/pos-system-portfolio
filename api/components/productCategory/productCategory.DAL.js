import connection from "../../config/db.js";

export const allProductCategories = async () => {
    try {
        return await connection.execute(`SELECT * FROM ProductCategory `);
    } catch (error) {
        throw error;
    }
};
