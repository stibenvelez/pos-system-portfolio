

export const validateFormProduct = async (values) => {
    const errors = {};
    if (values.product === "") {
        errors.product = "Indique el nombre del producto";
    }
    if (values.idProductCategory === "") {
        errors.idProductCategory = "Seleccione una categoria";
    }

    if (values.brandId === "") {
        errors.brandId = "Seleccione una marca";
    }
    if (values.unitPrice === "" || isNaN(values.unitPrice) || values.unitPrice <= 0) {
        errors.unitPrice = "Indique un precio de venta";
    }
    if (values.description ==="") {
        errors.description = 'Required';
    }
    if (values.unitPrice === "") {
        errors.unitPrice = 'Required';
    }
    if (values.commissionPercentage === "") {
        errors.commissionPercentage = 'Indique un numero de 0 a 100';
    }

    return errors;
}
    