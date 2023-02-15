import { Theme, alpha } from "@mui/material";

export const mainLayoutStyles = {
	root: {
		display: "flex",
		height: "100vh",
		overflow: "hidden",
		width: "100%",
		maxWidth: "1000px",
		position: "absolute",
		left: "50%",
		top: "0vh",
		transform: "translate(-50%, 0)",
		background: (theme: Theme) => alpha(
			theme.palette.secondary.light,
			0.9
		), justifyContent: "center",
		alignItems: "center"
	}
};
