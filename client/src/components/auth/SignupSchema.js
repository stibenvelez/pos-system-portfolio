import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    user: Yup.string().required(),
    password: Yup.string().required()

});

export default SignupSchema;
