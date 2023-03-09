import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { getPrizeIcon } from "src/utils";
import { historyListItemStyles } from "./HistoryListItem.styles";
import { HistoryListItemProps } from "./HistoryListItem.types";

export const HistoryListItem: FC<HistoryListItemProps> = ({
	multiplier,
	prize,
	prizeTitle,
	date
}) => {
	return (
		<Box
			sx={historyListItemStyles.root}
		>
			<Box
				sx={historyListItemStyles.textWrapper}
			>
				<Box
					component="img"
					src={getPrizeIcon(prize)}
					sx={historyListItemStyles.icon}
				/>
				<Box>
					<Typography
						sx={historyListItemStyles.title}
					>{prizeTitle}</Typography>
					<Typography
						sx={historyListItemStyles.dateText}
					>{date}</Typography>
				</Box>
			</Box>
			{multiplier !== 0 &&
				<Box
					sx={historyListItemStyles.multiplier}
				>
					<Typography
						sx={historyListItemStyles.multiplierText}
					>
						{`x${multiplier}`}
					</Typography>
				</Box>
			}
		</Box>
	);
};

export default HistoryListItem;
