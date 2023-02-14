import { colors, createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			light: "#FFD85A",
			main: "#F2994A"
		},
		secondary: {
			dark: "#373737",
			main: "#FFFFFF",
			light: "#DCDCDC"
		}
	},
	typography: {
		fontFamily: "Hind",
		h2: {
			fontSize: "calc(1vmin + 15px)",
			textAlign: "center",
			color: "#F2994A",
		},
		h3: {
			fontSize: "calc(2.2vmin + 25px)",
			textAlign: "center"
		},
		subtitle1: {
			color: "#373737",
			fontSize: "calc(.9vmin + 12px)",
			textAlign: "center",
			"&:hover": {
				color: "#000",
			}
		}
	}
});


theme.components = {
	"MuiButton": {
		styleOverrides: {
			contained: {
				color: theme.palette.secondary.dark,
				backgroundColor: theme.palette.primary.light,
				fontSize: "calc(.7vmin + 15px)",
				display: "flex",
				gap: "5px",
				"&:hover": {
					backgroundColor: theme.palette.primary.main
				}
			}
		}
	},
	"MuiTextField": {
		styleOverrides: {
			root: {

			}
		}
	},
	"MuiFormLabel": {
		styleOverrides: {
			root: {
				color: theme.palette.secondary.dark,
				"&.Mui-focused": {
					color: theme.palette.secondary.dark
				}
			}
		}
	},
	"MuiAppBar": {
		styleOverrides: {
			root: {
				backgroundColor: theme.palette.secondary.main
			}
		}
	}
};

export default theme;
