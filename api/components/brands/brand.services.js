import { getBrands, newBrand } from "./brands.DAL.js";

export const getAllBrandsService = async () => {
    try {
        const [rows] = await getBrands();
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const newBrandService = async (brand) => {
    try {
        return await newBrand(brand);
    } catch (error) {
        throw error;
    }
}


