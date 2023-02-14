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
				<Typography>{prizeTitle}</Typography>
				<Typography>{date}</Typography>
			</Box>
			{multiplier &&
				<Box
					sx={[
						historyListItemStyles.multiplier,
					]}
				>
					{`X${multiplier}`}
				</Box>
			}
		</Box>
	);
};

export default HistoryListItem;
