import { FC, PropsWithChildren } from "react";
import { useIntl } from "react-intl";
import { Link, useLocation } from "react-router-dom";
import { Box, AppBar, Button, Grid, Typography } from "@mui/material";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { AppRouteEnum } from "src/types";
import { firebaseAuth } from "src/firebase";
import { dashboardLayoutStyles } from "./DashboardLayout.style";
import { useHandleError } from "src/hooks";

export const DashboardLayout: FC<PropsWithChildren> = ({
	children
}) => {
	const intl = useIntl();
	const location = useLocation();
	const [user, loadingUser, errorUser] = useAuthState(firebaseAuth);
	const [signOut, loadingSignOut, errorSignOut] = useSignOut(firebaseAuth);

	useHandleError(!loadingSignOut && !!errorSignOut, errorSignOut?.message);
	useHandleError(!loadingUser && !!errorUser, errorUser?.message);

	return (
		<>
			<AppBar
				position="absolute"
			>
				<Box
					sx={dashboardLayoutStyles.headerWrapper}
				>
					<Box
						sx={dashboardLayoutStyles.linksWrapper}
					>
						<Link to={AppRouteEnum.HISTORY}
						>
							<Typography
								variant="subtitle1"
								fontWeight={location.pathname === AppRouteEnum.HISTORY ? 700 : 400}
							>
								{intl.formatMessage({ id: "headerHistoryLink" })}
							</Typography>
						</Link>
						<Link to={AppRouteEnum.SPIN}
						>
							<Typography
								variant="subtitle1"
								fontWeight={location.pathname === AppRouteEnum.SPIN ? 700 : 400}
							>
								{intl.formatMessage({ id: "headerSpinLink" })}
							</Typography>
						</Link>
					</Box>
					<Box
						sx={dashboardLayoutStyles.userDataWrapper}
					>
						<Box
							sx={dashboardLayoutStyles.avatar}
							component="img"
							src={user?.photoURL ?? ""}
							alt="userImage"
						/>
						<Button onClick={signOut}>
							<ExitToAppIcon
								sx={dashboardLayoutStyles.signOutIcon}
							/>
						</Button>
					</Box>
				</Box>
			</AppBar>
			<Box sx={dashboardLayoutStyles.root}>
				{children}
			</Box>
		</>
	);
};

export default DashboardLayout;
