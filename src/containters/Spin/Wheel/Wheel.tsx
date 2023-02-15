import { Box } from "@mui/material";
import { wheelStyles } from "./Wheel.styles";

export const Wheel = () => {
	return (
		<Box
			sx={wheelStyles.root}
		>
			<Box
				sx={wheelStyles.niddle}
			/>
			<Box
				sx={wheelStyles.wheel}
			>

			</Box>
		</Box>
	);
};

export default Wheel;

