import connection from "../../config/db.js";

export const allProducts = async ({ category, state, search }) => {
    const filterByCategory = () => {
        if (category) {
            return `p.idProductCategory LIKE '%${category}%'`;
        }
        return `p.idProductCategory LIKE '%%'`;
    };
    const filterByState = () => {
        if (state) {
            return `AND p.idState LIKE '%${state}%'`;
        }
        return `AND p.idState = '1'`;
    };

    const filterBySearch = () => {
        if (search) {
            return `AND p.product LIKE '%${search}%'`;
        }
        return ``;
    };

    try {
        const sql = `
        SELECT 
            p.idProduct,    
            p.product,
            p.idProductCategory,
            p.unitPrice,
            p.unitCost,
            p.commissionPercentage,
            p.idState,
            p.createAt,
            p.updateAt,
            p.observations,
            p.brandId,
            pc.category,
            p.CreateAt,
            p.image,
            s.state,
            b.brand
        FROM Products AS p

        LEFT JOIN ProductCategory AS pc ON p.idProductCategory = pc.idProductCategory
        LEFT JOIN States as s ON p.idState = s.idState
        LEFT JOIN Brands as b ON p.brandId = b.brandId
        
        WHERE
        ${filterByCategory()}
        ${filterByState()}
        ${filterBySearch()}
        

        ORDER BY p.idProductCategory AND p.createAt DESC
        `;
        return await connection.query(sql);
    } catch (error) {
        throw error;
    }
};

export const productById = async (id) => {
    try {
        return await connection.query(
            `SELECT 
            p.idProduct,
            p.product,
            p.idProductCategory,
            p.idProductSubCategory,
            p.unitPrice,
            p.unitCost,
            p.commissionPercentage,
            p.image,
            p.idState,
            p.createAt,
            p.updateAt,
            p.observations,
            p.brandId,
            b.brand,
            pc.category

            FROM Products as p
            LEFT JOIN ProductCategory AS pc ON pc.idProductCategory = p.idProductCategory
            LEFT JOIN Brands as b ON b.brandId = p.brandId
            WHERE p.idProduct = ${id}
            `
        );
    } catch (error) {
        throw error;
    }
};

export const insertProduct = async ({
    product,
    idProductCategory,
    unitPrice,
    unitCost,
    commissionPercentage,
    brandId,
    image,
}) => {
    try {
        return await connection.query(
            `INSERT INTO Products(    
                product,
                idProductCategory,
                unitPrice,
                unitCost,
                commissionPercentage,
                brandId,
                image
            ) VALUES (
                '${product}',
                ${idProductCategory * 1}, 
                ${unitPrice},
                ${unitCost},
                ${commissionPercentage},
                ${brandId * 1},
                ${image === "" ? "NULL" : `'${image}'`}
            )`
        );
    } catch (error) {
        throw error;
    }
};

export const editProduct = async ({
    idProduct,
    product,
    idProductCategory,
    unitPrice,
    unitCost,
    commissionPercentage,
    brandId,
    image,
    observations,
}) => {
    try {
        const sql = `UPDATE Products 
                    SET product='${product}',
                    idProductCategory =${idProductCategory},
                    unitPrice=${unitPrice},
                    unitCost=${unitCost},
                    commissionPercentage=${commissionPercentage},
                    brandId='${brandId}',
                    observations='${observations}',
                    image=${image ? `'${image}'` : null}
                    
                WHERE idProduct = ${idProduct}`;
        return await connection.query(sql);
    } catch (error) {
        throw error;
    }
};

export const disableProductById = async ({ id, state }) => {
    const sql = `UPDATE Products SET idState=${state}
                    WHERE idProduct = ${id}`;
    try {
        return await connection.query(sql);
    } catch (error) {
        throw error;
    }
};
export const deleteImageByProductId = async ({ id, image }) => {
    const sql = `
                UPDATE Products SET image=NULL
                WHERE idProduct = ${id}
                `;
    try {
        return await connection.query(sql);
    } catch (error) {
        throw error;
    }
};
