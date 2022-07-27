import { allDetailSales, saleDetailByIdSale } from "./salesDetails.DAL.js";

export const getAllSaleDetails = async (req, res) => {
    try {
        const [rows] = await allDetailSales(req.query);
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "hubo un error" });
    }
};

export const getSailDetailByIdSale = async (req, res) => {


    try {
        const [rows] = await saleDetailByIdSale(req.params.id);
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "hubo un error" });
    }
};


