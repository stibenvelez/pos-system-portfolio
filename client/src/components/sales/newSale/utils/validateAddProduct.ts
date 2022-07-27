
type errosType = {
    category?: string;
    product?: string;
    quantity?: string;
    commissionPercentage?: string;
    employe?: string;
}

const validateAddProduct = (product:any) => {
    const errors:errosType = {};
    if (product.category === "") {
        errors.category = "Seleccione un producto";
    }
    if (product.product === "") {
        errors.product = "Seleccione un producto";
    }
    if (product.quantity <= 0) {
        errors.quantity = "Ingrese un acantidad";
    }
    if (product.commissionPercentage !== 0 && product.employe === "") {
        errors.employe = "Ingrese el trabajador para la comision";
    }
 
    if (Object.keys(errors).length) {
        return errors;
    }
    
    return false;
};
export default validateAddProduct;
