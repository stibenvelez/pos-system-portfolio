export const validateNewEgress = (egress) => {
    const errors = {};
    if (egress.category === '') {
        errors.category = "La categoría es requerida";
    }
    if (egress.subcategory === '') {
        errors.subcategory = "La subcategoría es requerida";
    }
    if (egress.value === '') {  
        errors.value = "El valor es requerido";
    }
    if (egress.date === '') {
        errors.date = "La fecha es requerida";
    }

    if (Object.keys(errors).length > 0) {
        return errors;
    }
    return false
}
