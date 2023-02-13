import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useIntl } from "react-intl";
import { useSnackbar } from "notistack";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import {
	AppBar,
	Toolbar,
	Box,
	Tooltip,
	IconButton
} from "@mui/material";
import InputIcon from "@mui/icons-material/Input";
import { firebaseAuth } from "src/firebase";
import { mainNavbarStyles } from "./MainNavbar.styles";

const MainNavbar = ({ ...rest }) => {
	const intl = useIntl();
	const { enqueueSnackbar } = useSnackbar();
	const [signOut, _, error] = useSignOut(firebaseAuth);
	const [user] = useAuthState(firebaseAuth);

	useEffect(() => {
		if (!error) return;
		enqueueSnackbar(
			`${intl.formatMessage({ id: "failedLogOut" })}`,
			{
				variant: "error",
			}
		);
	}, [error]);


	const handleLogOut = async () => {
		signOut();
	};

	return (
		<AppBar
			elevation={0}
			{...rest}
		>
			<Toolbar>
				<Box sx={mainNavbarStyles.root} />
				{
					user && (
						<Tooltip
							title={`${intl.formatMessage({ id: "yourEmail" })}`}
							placement="bottom-start"
						>
							<IconButton
								color="inherit"
								onClick={handleLogOut}
							>
								<InputIcon />
							</IconButton>
						</Tooltip>
					)}
			</Toolbar>
		</AppBar>
	);
};

export default MainNavbar;
