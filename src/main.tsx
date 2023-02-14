import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/app";
import "./styles.scss";
import "@fontsource/hind";


const root = createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
