import { FC } from "react";
import { Formik } from "formik";
import { Box, Button, TextField } from "@mui/material";
import { LoginFormProps } from "./LoginForm.types";
import { loginSchema } from "./LoginForm.schema";
import { getFormStructure } from "src/utils";
import { useIntl } from "react-intl";

export const LoginForm: FC<LoginFormProps> = ({
	onSubmit
}) => {
	const intl = useIntl();
	const { logInStructure } = getFormStructure(intl);

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
						{logInStructure.map((item) => (
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
								error={touched[item.name as keyof typeof touched] && Boolean(errors[item.name as keyof typeof errors])}
								helperText={
									touched[item.name as keyof typeof touched]
									&& errors[item.name as keyof typeof errors]
									&& intl.formatMessage({ id: `${errors[item.name as keyof typeof errors]}` })
								}
							/>
						))}
					</Box>
					<Box>
						<Button
							fullWidth
							type="submit"
							variant="contained"
						>
							{intl.formatMessage({ id: "loginFormSubmitButtonText" })}
						</Button>
					</Box>
				</form>
			)}
		</Formik>
	);
};

export default LoginForm;
