import ribbon from "../../assets/ribbon.png";

export const spinStyles = {
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		height: "100%",
		padding: "40px 0px",
		overflowY: "auto",
		gap: "20px"
	},
	ribbon: {
		backgroundImage: `url(${ribbon})`,
		width: "100%",
		maxWidth: "500px",
		minHeight: "125px",
		aspectRatio: "4",
		backgroundPosition: "center",
		backgroundSize: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundRepeat: "no-repeat"
	},
	ribbonText: {
		textTransform: "uppercase",
		fontFamily: "Holtwood One SC",
		fontStyle: "normal",
		fontWeight: "400",
		fontSize: "calc(1.2vmin + 20px)",
		lineHeight: "81.52%",
		padding: "0px 0px 10px",
		textAlign: "center",
		background: "linear-gradient(186.8deg, #FCFF81 17.77%, rgba(255, 170, 6, 1) 97.24%)",
		backgroundClip: "text",
		textFillColor: "transparent",
		"WebkitTextStroke": "1px #712F00"
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
