import { FC } from "react";
import { useIntl } from "react-intl";
import { Formik } from "formik";
import { Box, Button, TextField } from "@mui/material";
import { getFormStructure } from "src/utils";
import { RegisterFormProps } from "./RegisterForm.types";
import { registerSchema } from "./RegisterForm.schema";

export const RegisterForm: FC<RegisterFormProps> = ({
	onSubmit
}) => {
	const intl = useIntl();
	const { signUpStructure } = getFormStructure();

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
			{({
				errors,
				handleBlur,
				handleChange,
				handleSubmit,
				touched,
				values
			}) => (
				<form onSubmit={handleSubmit}>
					<Box>
						{signUpStructure.map((item) => (
							<TextField
								fullWidth
								margin="normal"
								variant="filled"
								key={item.name}
								id={item.name}
								placeholder={item.name}
								type={item.type}
								name={item.name}
								label={intl.formatMessage({ id: item.label })}
								value={values[item.name as keyof typeof values]}
								onBlur={handleBlur}
								onChange={handleChange}
								error={touched[
									item.name as keyof typeof touched] &&
									Boolean(errors[item.name as keyof typeof errors])
								}
								helperText={
									touched[item.name as keyof typeof touched]
									&& errors[item.name as keyof typeof errors]
									&& intl.formatMessage({
										id: `${errors[item.name as keyof typeof errors]}`
									})
								}
							/>
						))}
					</Box>
					<Box>
						<Button
							type="submit"
							variant="contained"
							fullWidth
						>
							{intl.formatMessage({ id: "registerFormSubmitButtonText" })}
						</Button>
					</Box>
				</form>
			)}
		</Formik>
	);
};

export default RegisterForm;
