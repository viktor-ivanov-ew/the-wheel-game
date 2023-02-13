import { FC, PropsWithChildren, useState } from "react";
import { Box } from "@mui/material";
import { dashboardLayoutStyles } from "./DashboardLayout.style";

export const DashboardLayout: FC<PropsWithChildren> = ({
	children
}) => {

	return (
		<Box sx={dashboardLayoutStyles.root}>
			{children}
		</Box>
	);
};

export default DashboardLayout;
