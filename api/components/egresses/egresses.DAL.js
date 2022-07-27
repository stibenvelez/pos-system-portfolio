import connection from "../../config/db.js";

export const AllEgresses = async () => {
    try {
        const [result] = await connection.query(`
            SELECT 
                e.idEgress,
                e.idProvider,
                e.idEgressCategory,
                e.idEgressSubCategory,
                e.value,
                e.observations,
                e.state,
                e.date,
                e.createdAt,
                e.updateAt,
                ec.egressCategory,
                esc.egressSubCategory,
                p.provider
            FROM Egresses AS e

            LEFT JOIN Providers AS p ON e.idProvider = p.idProvider
            LEFT JOIN EgressesCategories AS ec ON e.idEgressCategory = ec.idEgressCategory
            LEFT JOIN EgressesSubcategories AS esc ON e.idEgressSubCategory = esc.idEgressSubCategory

            ORDER BY e.createdAt DESC
            
        `);
        return result;
    } catch (error) {
        throw error;
    }
};

export const egressById = async (id) => {
    try {
        const [result] = await connection.query(`
            SELECT
                e.idEgress,
                e.idProvider,
                e.idEgressCategory,
                e.idEgressSubCategory,
                e.value,
                e.observations,
                e.state,
                e.date,
                e.createdAt,
                e.updateAt,
                ec.egressCategory,
                esc.egressSubCategory,
                p.provider
            FROM Egresses AS e

            LEFT JOIN Providers AS p ON e.idProvider = p.idProvider
            LEFT JOIN EgressesCategories AS ec ON e.idEgressCategory = ec.idEgressCategory
            LEFT JOIN EgressesSubcategories AS esc ON e.idEgressSubCategory = esc.idEgressSubCategory
            WHERE e.idEgress = ?
        `, [id]);
        return result;
    } catch (error) {
        throw error;
    }
}

export const AllEgressesCategories = async () => {
    try {
        const [result] = await connection.query(
            "SELECT * FROM EgressesCategories"
        );
        return result;
    } catch (error) {
        throw error;
    }
};
export const AllEgressesSubcategories = async () => {
    try {
        const [result] = await connection.query(
            "SELECT * FROM EgressesSubcategories"
        );
        return result;
    } catch (error) {
        throw error;
    }
};

export const insertEgress = async (egress) => {
    try {
        const sql = `
            INSERT INTO Egresses (
                idProvider,
                IdEgressCategory,
               	IdEgressSubCategory,
                value,
                date,
                observations
            ) VALUES (
                ?,
                ?,
                ?,
                ?,
                ?,
                ?
            )`;
        const params = [
            egress.provider,
            egress.category,
            egress.subcategory,
            egress.value,
            egress.date,
            egress.observations,
        ];
        return await connection.query(sql, params)
    } catch (error) {
        console.log(error)
        throw error;
    }
}