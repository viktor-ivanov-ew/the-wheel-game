import theme from "src/theme/theme";

export const dashboardLayoutStyles = {
	root: {
		backgroundColor: theme.palette.background.default,
		display: "flex",
		height: "100%",
		overflow: "hidden",
		width: "100%"
	},
	wrapper: {
		display: "flex",
		flex: "1 1 auto",
		overflow: "hidden",
		paddingTop: "64px",
		[theme.breakpoints.up("md")]: {
			paddingLeft: "256px"
		}
	},
	container: {
		display: "flex",
		flex: "1 1 auto",
		overflow: "hidden"
	},
	content: {
		flex: "1 1 auto",
		height: "100%",
		paddingTop: "25px"
	},
};
