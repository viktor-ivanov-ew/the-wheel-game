import { RouteProps } from "react-router-dom";

export type RouteType = RouteProps & {
	isAuth?: boolean;
	denyShowLoginPage?: boolean;
};
