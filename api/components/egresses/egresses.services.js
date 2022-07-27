import {
    AllEgresses,
    insertEgress,
    AllEgressesCategories,
    AllEgressesSubcategories,
} from "./egresses.DAL.js";

export const getAllEgressesService = async () => {
    try {
        return await AllEgresses();
    } catch (error) {
        throw error;
    }
}
export const getAllEgressesCategoriesService = async () => {
    try {
        return await AllEgressesCategories();
    } catch (error) {
        throw error;
    }
};
export const getAllEgressesSubCategoriesService = async () => {
    try {
        return await AllEgressesSubcategories();
    } catch (error) {
        throw error;
    }
};


export const addNewEgressService = async (egress) => {

    try {
        await insertEgress(egress);        
    } catch (error) {
        throw error;
    }
    
     
}