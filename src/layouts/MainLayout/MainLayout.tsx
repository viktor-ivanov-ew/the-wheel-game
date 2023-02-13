import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { mainLayoutStyles } from "./MainLayout.styles";
import MainNavbar from "./MainNavbar/MainNavbar";

export const MainLayout: FC<PropsWithChildren> = ({
	children
}) => {
	return (
		<Box sx={mainLayoutStyles.root}>
			<MainNavbar />
			<Box sx={mainLayoutStyles.wrapper}>
				<Box sx={mainLayoutStyles.container}>
					<Box sx={mainLayoutStyles.content}>
						{children}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default MainLayout;
