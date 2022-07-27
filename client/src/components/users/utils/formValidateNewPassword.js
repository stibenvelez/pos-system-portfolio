export const formValidateNewPassword = (user) => {
    const errors = {};
    if (user.currentPassword === "") {
        errors.currentPassword = "La contraseña es requerida";
    }
    if (user.passwordConfirm === "") {
        errors.passwordConfirm = "La confirmación de contraseña es requerida";
    }
    if (user.newPassword !== user.passwordConfirm) {
        errors.passwordConfirm = "Las contraseñas no coinciden";
    }
    return errors;
};
