import connection from "../../config/db.js";

export const allSales = async (filters) => {
    const { dateFrom = "2022-05-01", dateTo = "2022-05-31", state } = filters;
    const filterByDate = () => {
        if (dateFrom === dateTo) {
            dateFrom
                ? `s.date like '%${dateFrom}%'`
                : `s.date > '%"2022-05-01"%'`;
        }

        if (dateFrom && dateTo) {
            const from = dateFrom ? `s.date >= '${dateFrom}'` : "";
            const to = dateTo ? `AND s.date <= '${dateTo}'` : "";

            return from + " " + to;
        }
    };

    try {
        const sql = `
        SELECT * 
        FROM Sales AS s 
        WHERE 
    
        ${filterByDate()}
        ${state ? "AND s.idStateSale = '" + state + "'" : ""}
        
        ORDER BY s.registeredAt DESC 
  
        `;
        const [rows] = await connection.query(sql);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const SaleById = async (id) => {
    try {
        const sql = `SELECT * FROM Sales WHERE id=${id}`;
        const [rows] = await connection.query(sql);
        return rows;
    } catch (error) {
        return await connection.query(sql);
    }
};

export const insertNewSale = async ({ dataSale, detail }) => {
    try {
        await connection.query("START TRANSACTION");
        const sqlDataSale = `INSERT INTO 
            Sales (
                date ,
                idDocumentType,
                document, 
                totalGross, 
                totalDiscount, 
                totalNet,
                idPaymentMethod,
                totalCommissionValue,
                registeredBy
                ) 
            VALUES(
                '${dataSale.date}',
                ${dataSale.documentType},
                ${dataSale.document},
                ${dataSale.totalGross},
                ${dataSale.totalDiscount},
                ${dataSale.totalNet},
                ${dataSale.payMethod},
                ${dataSale.totalCommissionValue},
                ${dataSale.registeredBy}
                )`;

        const [rows] = await connection.query(sqlDataSale);

        const idSale = rows.insertId;
        const sqlDetailSail = `INSERT INTO 
            SaleDetail (
                idSale, 
                idCategory, 
                IdProduct, 
                quantity, 
                unitPrice, 
                totalPrice,
                idEmploye,
                commissionValue,
                commissionPercentage,
                observations
                ) 
            VALUES ? `;

        const arrayDetail = detail.map((detail) => [
            idSale,
            detail.category,
            detail.product,
            detail.quantity,
            detail.unitPrice,
            detail.totalPrice,
            detail.employe,
            detail.commissionValue,
            detail.commissionPercentage,
            detail.observatios,
        ]);

        await connection.query(sqlDetailSail, [arrayDetail]);
        const result = await connection.query(`COMMIT`);
        return result;
    } catch (error) {
        await connection.query("ROLLBACK");
        throw error;
    }
};

export const cancelSaleById = async ({ id, idStateSale }) => {
    try {
        const sql = `UPDATE Sales SET idStateSale=${idStateSale} WHERE id=${id}`;
        return await connection.query(sql);
    } catch (error) {
        return await connection.query(sql);
    }
};

export const saleDetailByIdSale = async (idSale) => {
    try {
        const sql = `
        SELECT *
        FROM SaleDetail AS s 

        LEFT JOIN Products AS p ON s.idProduct = p.idProduct
        LEFT JOIN Employees AS e ON s.idEmploye= e.idEmploye
        WHERE idSale = ${idSale}
        `;
        return await connection.query(sql);
    } catch (error) {
        throw error;
    }
};
