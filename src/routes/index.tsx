import { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { RouteWrapper } from "src/hocs";
import { DashboardLayout, MainLayout } from "src/layouts";
import { routes } from "./routes";

const AppRoutes = () => {
	return (
		<Suspense
			fallback={
				<Box
					component="div"
					sx={{
						height: "100vh",
						overflow: "hidden",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<CircularProgress color="inherit" />
				</Box>
			}
		>
			<Routes>
				{routes.map((route, index) => (
					<Route
						{...route}
						key={`r_${index}_${route.path}`}
						element={
							route.isAuth ? (
								<DashboardLayout>
									<RouteWrapper {...route} />
								</DashboardLayout>
							) : (
								<MainLayout>
									<RouteWrapper {...route} />
								</MainLayout>
							)

						}
					/>
				))}
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
