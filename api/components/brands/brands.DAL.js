import connection from "../../config/db.js";

export const getBrands = async () => {
    try {
        const sql = `
        SELECT 
        b.*, 
        pc.category 

        FROM Brands AS b

        LEFT JOIN ProductCategory AS pc ON pc.idProductCategory = b.idProductCategory
        `;
        return await connection.query(sql);
    } catch (error) {
        console.log(error);
    }
}

export const newBrand = async ({ brand, idProductCategory, description }) => {
    
    try {
        const values = [
            `${brand}`,
            `${idProductCategory}`,
            `${description}`,
        ];
        const sql = `
            INSERT INTO Brands (
                brand,
                idProductCategory, 
                description)
            VALUES (?)
        `;
        const [result] = await connection.query(sql, [values]);
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
     
};
