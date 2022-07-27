import {
    allProducts,
    insertProduct,
    productById,
    editProduct,
} from "./productDAL.js";
import {
    AddnewProducService,
    deleteImageService,
    disableProductByIdService,
    editProductByIdService,
} from "./productServices.js";

export const getAllProducts = async (req, res) => {
    try {
        const [rows] = await allProducts(req.query);
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "hubo un error" });
    }
};

export const getProductById = async (req, res) => {
    try {
        const [rows] = await productById(req.params.id);
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "hubo un error" });
    }
};

export const AddnewProduct = async (req, res) => {
    try {
        await AddnewProducService(req);
        //const [rows] = await insertProduct(req.body);
        res.json("ok");
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "hubo un error" });
    }
};
export const editProductById = async (req, res) => {
    try {
        const result = await editProductByIdService(req);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "hubo un error" });
    }
};

export const disableProductById = async (req, res) => {
    try {
        await disableProductByIdService(req.params.id);
        res.json({ msg: "producto editado" });
    } catch (error) {
        console.log(error);
        res.status(404).json({ msg: error });
    }
};

export const deleteImage = async (req, res) => {
    try {
        await deleteImageService(req.params.id);
        res.json({ msg: "producto editado" });
    } catch (error) {
        console.log(error);
        res.status(404).json({ msg: error });
    }
};
