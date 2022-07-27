export const formatDateTime = (date) => {
    let newDate = new Date(date);
    const result = newDate.toLocaleString("en-GB", { timeZone: "UTC" });
    return result;
};


export const formatDate = (date) => {
    let newDate = new Date(date);
    const result = newDate.toLocaleDateString('sv');
    return result;
};


