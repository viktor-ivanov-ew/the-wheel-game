export const winModalStyles = {
	root: {
		width: "80vmin",
		height: "80vmin",
		border: "2vmin solid #D8AC3C",
		borderRadius: "20%",
		background: "linear-gradient(214.83deg, #D69317 11.71%, #F1EED1 92.66%)",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		padding: "10vmin",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center"
	},
	title: {
		textTransform: "uppercase",
		fontFamily: "Holtwood One SC",
		fontStyle: "normal",
		fontWeight: "400",
		fontSize: "calc(1.9vmin + 25px)",
		lineHeight: "81.52%",
		padding: "0px 0px 10px",
		textAlign: "center",
		background: "linear-gradient(186.8deg, #FCFF81 17.77%, rgba(255, 170, 6, 1) 97.24%)",
		backgroundClip: "text",
		textFillColor: "transparent",
		"WebkitTextStroke": "2px #712F00"
	},
	subtitle: {
		fontFamily: "Gluten",
		fontStyle: "normal",
		fontWeight: "400",
		fontSize: "calc(1.6vmin + 25px)",
		lineHeight: "81.52%",
		padding: "0px 0px 10px",
		textAlign: "center",
		background: "linear-gradient(186.8deg, #FCFF81 17.77%, rgba(255, 170, 6, 1) 97.24%)",
		backgroundClip: "text",
		textFillColor: "transparent",
		"WebkitTextStroke": "1.5px #712F00"
	},
	icon: {
		width: "30%",
		transform: "rotateZ(90deg)"
	},
	button: {
		background: "linear-gradient(179.57deg, #C8F170 0.37%, #55D349 90.72%)",
		boxShadow: "0px 12px 14px 5px rgba(0, 0, 0, 0.25)",
		borderRadius: "64px",
		"&:hover": {
			transition: "background .6s",
			background: "linear-gradient(179.57deg, #C2F673 0.37%, #22D349 90.72%)",
		}
	},
	buttonText: {
		textTransform: "uppercase",
		fontFamily: "Holtwood One SC",
		fontStyle: "normal",
		fontWeight: "400",
		fontSize: "calc(1.2vmin + 20px)",
		lineHeight: "81.52%",
		padding: "10px 20px",
		textAlign: "center",
		background: "linear-gradient(186.83deg, #F1ED8A -3.37%, #E1FF6A 35.83%, rgba(230, 151, 0, 0) 290.76%)",
		backgroundClip: "text",
		textFillColor: "transparent",
		"WebkitTextStroke": "1px #467100",
	}
};
