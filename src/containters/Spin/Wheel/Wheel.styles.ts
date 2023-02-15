import niddle from "../../../assets/niddle.png";

export const wheelStyles = {
	root: {
		borderRadius: "50%",
		border: "10px solid #D8AC3C",
		width: "calc(35vmin + 150px)",
		height: "calc(35vmin + 150px)",
		minWidth: "calc(35vmin + 150px)",
		minHeight: "calc(35vmin + 150px)",
		maxWidth: "calc(35vmin + 150px)",
		maxHeight: "calc(35vmin + 150px)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	niddle: {
		backgroundImage: `url(${niddle})`,
		width: "calc(7.7vmin + 33.3px)",
		height: "calc(7.7vmin + 33.3px)",
		backgroundPosition: "center",
		backgroundSize: "100%",
		backgroundRepeat: "no-repeat",
		position: "absolute",
		transform: "translateY(calc(-17.5vmin - 75px + 40%))"
	},
	wheel: {
		background: "red",
		width: "100%",
		height: "100%",
		boxShadow: "inset 0px 0px 34px 8px rgba(0,0,0,0.75)",
		borderRadius: "50%",
	}
};
