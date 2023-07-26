import { useCallback } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import GoogleIcon from "@mui/icons-material/Google";
import { LoginForm } from "src/components";
import { AppRouteEnum, LoginFormFields } from "src/types";
import { firebaseAuth } from "src/firebase";
import { useHandleError } from "src/hooks";
import { loginStyles } from "./Login.styles";

export const Login = () => {
	const intl = useIntl();

	const [
		signInWithEmailAndPassword, ,
		loadingLoginViaEmail,
		errorLoginViaEmail
	] = useSignInWithEmailAndPassword(firebaseAuth);

	const [
		signInWithGoogle, ,
		loadingLoginViaGoogle,
		errorLoginViaGoogle
	] = useSignInWithGoogle(firebaseAuth);

	useHandleError(
		!loadingLoginViaEmail &&
		!!errorLoginViaEmail,
		errorLoginViaEmail?.message
	);

	useHandleError(
		!loadingLoginViaGoogle &&
		!!errorLoginViaGoogle,
		errorLoginViaGoogle?.message
	);

	const handleSubmitLoginForm = useCallback(
		({ email, password }: LoginFormFields) => {
			signInWithEmailAndPassword(email.trim(), password.trim());
		},
		[]
	);

	const handleLogInWithGoogle = useCallback(
		() => {
			signInWithGoogle();
		},
		[signInWithGoogle],
	);

	return (
		<Box
			sx={loginStyles.root}
		>
			<Typography variant="h3">{
				intl.formatMessage({ id: "loginPageTitle" })
			}</Typography>
			<LoginForm onSubmit={handleSubmitLoginForm} />
			<Button
				variant="contained"
				fullWidth
				onClick={handleLogInWithGoogle}
			>
				<GoogleIcon />
				{intl.formatMessage({ id: "googleLoginButton" })}
			</Button>
			<Link to={AppRouteEnum.REGISTER}>
				<Typography
					variant="subtitle1"
				>
					{intl.formatMessage({ id: "registerAccountLink" })}
				</Typography>
			</Link>
		</Box>
	);
};

export default Login;
