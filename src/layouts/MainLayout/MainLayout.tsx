import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { mainLayoutStyles } from "./MainLayout.styles";

export const MainLayout: FC<PropsWithChildren> = ({
	children
}) => {
	return (
		<Box sx={mainLayoutStyles.root}>
			{children}
		</Box>
	);
};

export default MainLayout;
