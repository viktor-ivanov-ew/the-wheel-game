import { FC } from "react";
import { Formik } from "formik";
import { Box } from "@mui/material";
import { LoginFormProps } from "./LoginForm.types";
import { loginSchema } from "./LoginForm.schema";

export const LoginForm: FC<LoginFormProps> = ({
	onSubmit
}) => {
	return (
		<Formik
			initialValues={{
				email: "",
				password: ""
			}}
			validationSchema={loginSchema}
			onSubmit={onSubmit}
		>
			{({
				errors,
				handleBlur,
				handleChange,
				handleSubmit,
				isSubmitting,
				touched,
				values
			}) => (
				<form onSubmit={handleSubmit}>
					<Box>

					</Box>
				</form>
			)}
		</Formik>
	);
};

export default LoginForm;
