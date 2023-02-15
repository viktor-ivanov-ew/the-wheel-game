import { Theme, alpha } from "@mui/material";

export const dashboardLayoutStyles = {
	root: {
		display: "flex",
		height: "calc(100vh - 80px)",
		overflow: "hidden",
		width: "100%",
		maxWidth: "1000px",
		position: "absolute",
		left: "50%",
		top: "80px",
		transform: "translate(-50%, 0)",
		background: (theme: Theme) => alpha(
			theme.palette.secondary.light,
			0.9
		),
		justifyContent: "center",
		alignItems: "center"
	},
	avatar: {
		width: "calc(3vmin + 30px)",
		height: "calc(3vmin + 30px)",
		borderRadius: "50%"
	},
	headerWrapper: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "10px 20px",
		height: "80px"
	},
	linksWrapper: {
		display: "flex",
		justifyContent: "space-between",
		gap: "calc(1vmin + 5px)",
		alignItems: "center"
	},
	userDataWrapper: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	signOutIcon: {
		width: "40px",
		height: "40px"
	}
};
