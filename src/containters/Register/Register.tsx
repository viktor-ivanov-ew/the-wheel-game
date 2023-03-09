import { useCallback } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { RegisterForm } from "src/components";
import { AppRouteEnum, RegisterFormFields } from "src/types";
import { firebaseAuth } from "src/firebase";
import { useHandleError } from "src/hooks";
import { registerStyles } from "./Register.styles";

export const Register = () => {
	const intl = useIntl();
	const [
		createUserWithEmailAndPassword, ,
		loadingRegisterViaEmail,
		errorRegisterViaEmail
	] = useCreateUserWithEmailAndPassword(firebaseAuth);

	useHandleError(
		!loadingRegisterViaEmail &&
		!!errorRegisterViaEmail,
		errorRegisterViaEmail?.message
	);

	const onSubmit = useCallback(
		({ email, password }: RegisterFormFields) => {
			createUserWithEmailAndPassword(email.trim(), password.trim());
		},
		[]
	);

	return (
		<Box
			sx={registerStyles.root}
		>
			<Typography variant="h3">{
				intl.formatMessage({ id: "registerPageTitle" })
			}</Typography>
			<RegisterForm onSubmit={onSubmit} />
			<Link to={AppRouteEnum.LOGIN}>
				<Typography
					variant="subtitle1"
				>
					{intl.formatMessage({ id: "loginAccountLink" })}
				</Typography>
			</Link>
		</Box>
	);
};

export default Register;
