import connection from "../../config/db.js";

export const allSalesReport = async ({
    dateFrom = "2022-05-01",
    dateTo = "2022-05-31",
    category,
    employe,
}) => {
    const filterByDate = () => {
        if (dateFrom === dateTo) {
            return `sd.createdAt like '%2022-05-08%'`;
        }

        if (dateFrom && dateTo) {
            const from = dateFrom ? `sd.createdAt >= '${dateFrom}'` : "";
            const to = dateTo ? `AND sd.createdAt <= '${dateTo}'` : "";

            return from + " " + to;
        }
    };

    const filterbyCategory = () => {
        if (category) {
            return `AND sd.idCategory = '${category}'`;
        }
        return "";
    };
    const filterByEmplye = () => {
        if (employe) {
            return `AND sd.idEmploye = '${employe}'`;
        }
        return `AND sd.idEmploye like "%%"`;
    };
    try {
        const sqlSales = `
        SELECT 
            sd.idSaleDetail, 
            sd.idSale, 
            sd.idCategory, 
            sd.IdProduct, 
            sd.quantity, 
            sd.unitPrice,
            sd.totalPrice,
            sd.idEmploye    ,
            sd.commissionValue, 
            sd.commissionPercentage, 
            sd.observations, 
            sd.createdAt, 
            sd.updateAt,
            p.product,
            p.unitCost,
            e.name AS employeName
        FROM SaleDetail AS sd

        LEFT JOIN Products AS p ON sd.idProduct = p.idProduct
        LEFT JOIN Employees AS e ON sd.idEmploye= e.idEmploye
        WHERE
        ${filterByDate()}
        ${filterbyCategory()}
        ${filterByEmplye()}
        ORDER BY sd.createdAt DESC

        `;
       
        return await connection.query(sqlSales);
    } catch (error) {
        throw error;
    }
};

export const allEgressesReport = async ({
    dateFrom = "2022-05-01",
    dateTo = "2022-05-31",
}) => {
    const filterByDate = () => {
        if (dateFrom === dateTo) {
            return `e.createdAt like '%2022-05-08%'`;
        }

        if (dateFrom && dateTo) {
            const from = dateFrom ? `e.createdAt >= '${dateFrom}'` : "";
            const to = dateTo ? `AND e.createdAt <= '${dateTo}'` : "";

            return from + " " + to;
        }
    };
    try {
        const sqlSales = (category) => `
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
        WHERE 
        ${filterByDate()}
        AND e.idEgressCategory = '${category}'
        `;
        const [costs] = await connection.query(sqlSales(1));
        const [expenses] = await connection.query(sqlSales(2));
        return { costs, expenses };
    } catch (error) {
        console.log(error);
    }
};
