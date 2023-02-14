import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { RegisterForm } from "src/components";
import { AppRouteEnum } from "src/types";
import { registerStyles } from "./Register.styles";

export const Register = () => {
	const intl = useIntl();

	return (
		<Box
			sx={registerStyles.root}
		>
			<Typography variant="h3">{intl.formatMessage({ id: "registerPageTitle" })}</Typography>
			<RegisterForm onSubmit={() => null} />
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
