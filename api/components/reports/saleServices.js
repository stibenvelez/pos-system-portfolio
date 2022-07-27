import { allEgressesReport, allSalesReport } from "./salesReportDAL.js";

export const getSalesReportService = async (params) => {
    try {
        const [sales] = await allSalesReport(params);
        const { costs, expenses } = await allEgressesReport(params);
        //SALES
        const totalSold = sales.reduce((acc, item) => acc + item.totalPrice, 0);
        const totalCommission = sales.reduce(
            (acc, item) => acc + item.commissionValue,
            0
        );
        const totalCost = sales.reduce(
            (acc, item) => acc + item.unitCost * item.quantity,
            0
        );
        const amountOfSales = sales.length;

        //EGRESSES
        const totalExpenses = expenses.reduce(
            (acc, item) => acc + item.value,
            0
        );
        const totalCosts = costs.reduce((acc, item) => acc + item.value, 0);

        const result = {
            totalCost,
            totalSold,
            totalCommission,
            count: amountOfSales,
            sales,
            totalExpenses,
            totalCosts,
            costs,
            expenses,
        };
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
