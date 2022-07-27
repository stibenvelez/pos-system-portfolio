import {
    deleteImageByProductId,
    disableProductById,
    editProduct,
    insertProduct,
    productById,
} from "./productDAL.js";

export const AddnewProducService = async (data) => {
    try {
        const product = data.body;

        if (data.file.filename) {
            product.image = data.file?.filename;
        } else {
            product.image = "";
        }

        console.log(product);
        const [rows] = await insertProduct(product);
        return rows;
    } catch (error) {
        throw error;
    }
};

export const editProductByIdService = async (data) => {

    try {
        const [[getProduct]] = await productById(data.body.idProduct);
    
        if (!Object.keys(getProduct).length) {
            res.status(400).json({ msg: "No se encontro el producto" });
            return;
        }

        const product = data.body;
        product.image = data.file ? data.file?.filename : getProduct.image;
        product.product = product.product.toLocaleLowerCase();

        const [rows] = await editProduct(product);
        return rows;
    } catch (error) {
        throw error;
    }
};

export const disableProductByIdService = async (id) => {
    const [rows] = await productById(id);
    const currentState = rows[0].idState;
    const newState = {
        id,
        state: currentState === 1 ? 2 : 1,
    };

    if (rows.length === 0) {
        throw "No existe el producto";
    }

    const [result] = await disableProductById(newState);
    return result;
};

export const deleteImageService = async (id) => {
    try {
        const [rows] = await productById(id);
        const newState = {
            id,
            image: "",
        };

        if (rows.length === 0) {
            throw "No existe el producto";
        }

        const [result] = await deleteImageByProductId(newState);
        return result;
    } catch (error) {
        throw error;
    }
}
