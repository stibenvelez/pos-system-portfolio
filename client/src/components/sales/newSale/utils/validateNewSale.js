const validateNewSale = ({ dataSale, detail }) => {

    const errors = {};
    if (dataSale.date === "") {
        errors.date = "Ingrese una fecha";
    }
    if (dataSale.document === "") {
        errors.document = "Ingrese un numero de documento";
    }
    if (detail.length === 0) {
        errors.document = "Debe agregar al menos un producto";
    }
    if (dataSale.payMethod === "") {
        errors.payMethod = "Seleccione un metodo de pago";
    }

    return errors;
};
export default validateNewSale;
