import theme from "src/theme/theme";

export const mainLayoutStyles = {
	root: {
		backgroundColor: theme.palette.background.paper,
		display: "flex",
		height: "100%",
		overflow: "hidden",
		width: "100%"
	},
	wrapper: {
		display: "flex",
		flex: "1 1 auto",
		overflow: "hidden",
	},
	container: {
		display: "flex",
		flex: "1 1 auto",
		overflow: "hidden"
	},
	content: {
		backgroundColor: theme.palette.background.default,
		flex: "1 1 auto",
		height: "100%",
		overflow: "auto",
		paddingTop: "64px"
	},
};
