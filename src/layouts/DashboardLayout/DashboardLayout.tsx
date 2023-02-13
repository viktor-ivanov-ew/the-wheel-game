import { FC, PropsWithChildren, useState } from "react";
import { Box } from "@mui/material";
import { dashboardLayoutStyles } from "./DashboardLayout.style";

export const DashboardLayout: FC<PropsWithChildren> = ({
	children
}) => {
	const [isMobileNavOpen, setMobileNavOpen] = useState(false);

	const onMobileNavOpen = () => {
		setMobileNavOpen(true);
	};

	return (
		<Box sx={dashboardLayoutStyles.root}>
			{/* <DashboardSidebar
				onMobileClose={() => setMobileNavOpen(false)}
				openMobile={isMobileNavOpen}
			/>
			<DashboardNavbar onMobileNavOpen={onMobileNavOpen} /> */}
			<Box sx={dashboardLayoutStyles.wrapper}>
				<Box sx={dashboardLayoutStyles.container}>
					<Box sx={dashboardLayoutStyles.content}>
						{children}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default DashboardLayout;
