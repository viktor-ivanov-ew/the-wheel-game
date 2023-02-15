import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { wheelItemIconStyles } from "./WheelItemIcon.styles";
import { WheelItemIconProps } from "./WheelItemIcon.types";
import { getPrizeIcon } from "src/utils";
import multiplierImage from "../../../assets/prizeIcons/multiplier.png";
import { PrizeType } from "src/types";

export const WheelItemIcon: FC<WheelItemIconProps> = ({
	type,
	multiplier
}) => {
	return (
		<Box
			sx={wheelItemIconStyles.root}
		>
			{multiplier &&
				<Box
					sx={[
						wheelItemIconStyles.label,
						{ backgroundImage: `url(${multiplierImage})` }
					]}
				>
					<Typography
						sx={wheelItemIconStyles.labelText}
					>
						x{multiplier}
					</Typography>
				</Box>
			}
			<Box
				sx={[
					wheelItemIconStyles.icon,
					type === PrizeType.JACKPOT && {
						transform: "rotateZ(180deg) translateY(50%) scale(.5)"
					}
				]}
				component="img"
				src={getPrizeIcon(type)}
			/>
			{type === PrizeType.JACKPOT && (
				<Typography
					sx={wheelItemIconStyles.jackpotText}
				>
					JACK POT
				</Typography>
			)}
		</Box>
	);
};
