import { Theme } from "@mui/material";
import multiplierIcon from "../../../assets/prizeIcons/multiplier.png";

export const historyListItemStyles = {
	root: {
		backgroundColor: (theme: Theme) => theme.palette.primary.light,
		width: "90%",
		display: "flex",
		justifyContent: "space-between",
		padding: "20px",
		borderRadius: "10px"
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
		backgroundRepeat: "no-repeat",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",

	},
	multiplierText: {
		fontSize: "calc(.7vmin + 10px)",
		fontFamily: "Holtwood One SC",
		fontWeight: "700",
		background: "linear-gradient(186.8deg, #FCFF81 17.77%, rgba(255, 170, 6, 1) 97.24%)",
		backgroundClip: "text",
		textFillColor: "transparent",
		"WebkitTextStroke": "0.4px #712F00"
	},
	textWrapper: {
		display: "flex",
		flexDirection: "row",
	},
	dateText: {
		fontSize: "calc(1.7vmin + 10px)",
		fontFamily: "Gluten",
		color: "#686e78"
	},
	title: {
		fontSize: "calc(1.7vmin + 10px)",
		fontFamily: "Holtwood One SC",
		fontWeight: "700",
		background: "linear-gradient(186.8deg, #FCFF81 17.77%, rgba(255, 170, 6, 1) 97.24%)",
		backgroundClip: "text",
		textFillColor: "transparent",
		"WebkitTextStroke": "1px #712F00"
	}
};
