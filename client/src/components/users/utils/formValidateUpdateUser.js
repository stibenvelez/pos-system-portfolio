const formValidateUpdateUser = (user) => {

    const errors = {};
    if(user.user === '') {
        errors.user = 'El nombre de usuario es requerido';
    }
    if (user.email === '') {
        errors.email = 'El correo electrónico es requerido';    
    }
    if (user.firstName === '') {
        errors.firstName = 'El nombre es requerido';
    }
    if (user.lastName === '') {
        errors.lastName = 'El apellido es requerido';
    }
    if(user.role === '') {
        errors.role = 'El rol es requerido';
    }
    return errors;
}

export default formValidateUpdateUser;