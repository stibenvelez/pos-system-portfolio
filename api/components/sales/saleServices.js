import { allSales, cancelSaleById, insertNewSale } from "./saleDAL.js";

export const getAllSalesServices = async (query) => {
    try {
        const rows = await allSales(query);
        return rows;
    } catch (error) {
        throw error;
    }
};

export const newSaleService = async (req) => {
    const data = req.body;
    const user = req.user;
    try {
        const sumTotalGross = (acc, num) => acc + num.totalPrice;
        data.dataSale.totalGross = data.detail.reduce(sumTotalGross, 0);

        const sumTotalDiscount = (acc, value) => acc + value.totalDiscount;
        data.dataSale.totalDiscount = data.detail.reduce(sumTotalDiscount, 0);

        data.dataSale.totalNet =
            data.dataSale.totalGross - data.dataSale.totalDiscount;

        data.dataSale.totalCommissionValue = data.detail.reduce(
            (acc, value) => acc + value.commissionValue,0
        );
        data.dataSale.registeredBy = user.idUser;
        await insertNewSale(data);
    } catch (error) {
        throw error;
    }
};

export const cancelSaleByIdService = async (sale) => {
    const newState = {
        id: sale.id,
        idStateSale: 2,
    };
    cancelSaleById(newState);
    const result = await sale;
    return result;
};
