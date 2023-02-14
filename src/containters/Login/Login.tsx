import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { LoginForm } from "src/components";
import { AppRouteEnum, LoginFormFields } from "src/types";
import { loginStyles } from "./Login.styles";

export const Login = () => {
	const intl = useIntl();

	return (
		<Box
			sx={loginStyles.root}
		>
			<Typography variant="h3">{intl.formatMessage({ id: "loginPageTitle" })}</Typography>
			<LoginForm onSubmit={() => null} />
			<Button
				variant="contained"
				fullWidth
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
