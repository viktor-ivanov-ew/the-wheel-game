import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { AppRouteEnum, RouteType } from "src/types";

const HistoryPage = lazy(() => import("../pages/HistoryPage/HistoryPage"));
const SpinPage = lazy(() => import("../pages/SpinPage/SpinPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));

export const routes: Array<RouteType> = [
	{
		element: <HistoryPage/>,
		path: AppRouteEnum.HISTORY,
		isAuth: true
	},
	{
		element: <SpinPage/>,
		path: AppRouteEnum.SPIN,
		isAuth: true
	},
	{
		element: <LoginPage/>,
		path: AppRouteEnum.LOGIN,
		isAuth: false
	},
	{
		element: <RegisterPage/>,
		path: AppRouteEnum.REGISTER,
		isAuth: false
	},
	{
		element: <Navigate to={AppRouteEnum.HISTORY} />,
		path: AppRouteEnum.ANY,
		denyShowLoginPage: false
	},
];
