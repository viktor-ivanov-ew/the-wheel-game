import { BrowserRouter } from "react-router-dom";
import {
	CssBaseline,
	ThemeProvider
} from "@mui/material";
import { SnackbarProvider } from "notistack";
import ErrorIcon from "@mui/icons-material/Error";
import { AppIntlProvider } from "src/hocs";
import AppRoutes from "src/routes";
import theme from "src/theme/theme";

const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<AppIntlProvider>
					<SnackbarProvider
						maxSnack={5}
						anchorOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
						preventDuplicate
						iconVariant={{
							error: <ErrorIcon style={{ color: "#fff", marginRight: "8px" }} />
						}}
						autoHideDuration={3000}
					>
						<CssBaseline />
						<AppRoutes/>
					</SnackbarProvider>
				</AppIntlProvider>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
