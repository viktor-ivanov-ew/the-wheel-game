import { Theme } from "@mui/material";
import multiplierIcon from "../../../assets/prizeIcons/multiplier.png";

export const historyListItemStyles = {
	root: {
		backgroundColor: (theme: Theme) => theme.palette.primary.light,
		width: "90%",
		display: "flex",
		justifyContent: "space-between",
		padding: "20px",
		maxWidth: "380px"
	},
	icon: {
		height: "50px",
		marginRight: "40px"
	},
	multiplier: {
		position: "relative",
		transform: "translate(40px, -40px)",
		height: "40px",
		width: "40px",
		backgroundImage: `url(${multiplierIcon})`,
		backgroundPosition: "center",
		backgroundSize: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	textWrapper: {
		display: "flex",
		flexDirection: "column",
		flexWrap: "wrap",
		height: "50px",
	}
};
