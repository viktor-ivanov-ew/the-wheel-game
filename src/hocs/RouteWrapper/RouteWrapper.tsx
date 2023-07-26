import { FC } from "react";
import { Navigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "src/firebase";
import { AppRouteEnum, RouteType } from "src/types";
import { routeWrapperStyles } from "./RouteWrapper.styles";

export const RouteWrapper: FC<RouteType> = ({
	isAuth,
	denyShowLoginPage,
	element
}) => {
	const [user, loading] = useAuthState(firebaseAuth);

	if (loading) return (
		<Box
			component="div"
			sx={routeWrapperStyles.spinnerWrapper}
		>
			<CircularProgress color="inherit" />
		</Box>
	);

	if (denyShowLoginPage || (!!user === isAuth)) return <>{element}</>;

	if (user) return (
		<Navigate
			to={AppRouteEnum.HISTORY}
		/>
	);

	return (
		<Navigate
			to={AppRouteEnum.LOGIN}
		/>
	);
};

export default RouteWrapper;
