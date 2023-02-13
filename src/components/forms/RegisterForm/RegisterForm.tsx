import { FC } from "react";
import { Formik } from "formik";
import { RegisterFormProps } from "./RegisterForm.types";
import { registerSchema } from "./RegisterForm.schema";

export const RegisterForm: FC<RegisterFormProps> = ({
	onSubmit
}) => {
	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
				confirmPassword: ""
			}}
			validationSchema={registerSchema}
			onSubmit={onSubmit}
		>

		</Formik>
	);
};

export default RegisterForm;
