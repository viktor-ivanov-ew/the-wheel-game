import { useIntl } from "react-intl";
import { Box, Typography, Button } from "@mui/material";
import { spinStyles } from "./Spin.styles";
import Wheel from "./Wheel/Wheel";

export const Spin = () => {
	const intl = useIntl();

	return (
		<Box
			sx={spinStyles.root}
		>
			<Box
				sx={spinStyles.ribbon}
			>
				<Typography
					sx={spinStyles.ribbonText}
				>
					{intl.formatMessage({ id: "spinPageTitle" })}
				</Typography>
			</Box>
			<Wheel />
			<Button
				sx={spinStyles.button}
			>
				<Typography
					sx={spinStyles.buttonText}
				>
					{intl.formatMessage({ id: "spinButtonTitle" })}
				</Typography>
			</Button>
		</Box>
	);
};

export default Spin;
