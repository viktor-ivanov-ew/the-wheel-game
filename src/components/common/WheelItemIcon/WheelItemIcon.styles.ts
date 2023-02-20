export const wheelItemIconStyles = {
	root: {
		width: "100%",
		height: "100%",
		transform: "rotateZ(90deg)"
	},
	label: {
		minWidth: "35%",
		minHeight: "35%",
		position: "absolute",
		backgroundSize: "80%",
		backgroundPosition: "center",
		transform: "translate(55%, 0%) rotateZ(180deg)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundRepeat: "no-repeat",
		zIndex: "2",
	},
	icon: {
		width: "100%",
		height: "100%",
		transform: "rotateZ(180deg)",
		zIndex: "1"
	},
	jackpotText: {
		textTransform: "uppercase",
		fontFamily: "Holtwood One SC",
		fontStyle: "normal",
		fontWeight: "400",
		fontSize: "calc(1.8vmin + 10px)",
		lineHeight: "81.52%",
		padding: "10px 20px",
		textAlign: "center",
		background: "linear-gradient(357.3deg, #F7FB3A 2.46%, #C1570B 92.66%)",
		backgroundClip: "text",
		textFillColor: "transparent",
		"WebkitTextStroke": "1px #712F00",
		transform: "rotateZ(180deg) translateY(100%)"
	},
	labelText: {
		textTransform: "uppercase",
		fontStyle: "normal",
		fontWeight: "400",
		fontSize: "calc(.8vmin + 5px)",
		lineHeight: "81.52%",
		padding: "10px 20px",
		textAlign: "center",
		background: "linear-gradient(357.3deg, #F7FB3A 2.46%, #C1570B 92.66%)",
		backgroundClip: "text",
		textFillColor: "transparent",
		"WebkitTextStroke": ".7px #712F00",
	}
};
