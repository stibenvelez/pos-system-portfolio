import { getAllBrandsService, newBrandService } from "./brand.services.js";

export const getAllBrands = async (req, res) => {
    try {
        const brands = await getAllBrandsService();
        res.json(brands);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }   
};


export const inserNewBrand = async (req, res) => {
    try {
        await newBrandService(req.body);
        res.status(200).json({msg: "marca ingresada"});
    } catch (error) {
        res.status(400).json({msg: "error al ingresar marca"});
    }
}