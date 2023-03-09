import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { getPrizeIcon } from "src/utils";
import { PrizeType } from "src/types";
import { wheelItemIconStyles } from "./WheelItemIcon.styles";
import { WheelItemIconProps } from "./WheelItemIcon.types";
import multiplierImage from "../../../assets/prizeIcons/multiplier.png";

export const WheelItemIcon: FC<WheelItemIconProps> = ({
	type,
	multiplier,
	isModal
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
						transform:
							`rotateZ(180deg) translateY(${isModal ? 0 : 50}%) scale(${.5})`
					}
				]}
				component="img"
				src={getPrizeIcon(type)}
			/>
			{type === PrizeType.JACKPOT && !isModal && (
				<Typography
					sx={[
						wheelItemIconStyles.jackpotText
					]}
				>
					JACK POT
				</Typography>
			)}
		</Box>
	);
};
