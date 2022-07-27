import { allProductCategories } from "./productCategory.DAL.js"


export const getAllCategoryProducts = async (req, res) => {
    try {
        const [rows] = await allProductCategories()
        res.json(rows);
        
    } catch (error) {
        console.log(error)
    }
}