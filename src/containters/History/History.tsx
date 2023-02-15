import { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { useIntl } from "react-intl";
import { PrizeType } from "src/types";
import { historyStyles } from "./History.styles";
import HistoryListItem from "./HistoryListItem/HistoryListItem";

export const History = () => {
	const intl = useIntl();

	const mockArray = [
		{
			prize: PrizeType.HEALTH,
			multiplier: 4,
			prizeTitle: "Free lifes",
			date: "just now"
		},
		{
			prize: PrizeType.HEALTH,
			multiplier: 4,
			prizeTitle: "Free lifes",
			date: "just now"
		},
		{
			prize: PrizeType.HEALTH,
			multiplier: 4,
			prizeTitle: "Free lifes",
			date: "just now"
		},
		{
			prize: PrizeType.HEALTH,
			multiplier: 4,
			prizeTitle: "Free lifes",
			date: "just now"
		},
		{
			prize: PrizeType.HEALTH,
			multiplier: 4,
			prizeTitle: "Free lifes",
			date: "just now"
		},
		{
			prize: PrizeType.HEALTH,
			multiplier: 4,
			prizeTitle: "Free lifes",
			date: "just now"
		},
		{
			prize: PrizeType.HEALTH,
			multiplier: 4,
			prizeTitle: "Free lifes",
			date: "just now"
		},
		{
			prize: PrizeType.HEALTH,
			multiplier: 4,
			prizeTitle: "Free lifes",
			date: "just now"
		},
		{
			prize: PrizeType.HEALTH,
			multiplier: 4,
			prizeTitle: "Free lifes",
			date: "just now"
		}
	];

	return (
		<Box
			sx={historyStyles.root}
		>
			<Box
				sx={historyStyles.titleWrapper}
			>
				<Typography variant="h3">
					{intl.formatMessage({ id: "historyPageTitle" })}
				</Typography>
			</Box>
			<Box
				sx={historyStyles.gamesList}
			>
				{mockArray.map((item, i) => (
					<Fragment key={i}>
						<HistoryListItem {...item} />
					</Fragment>
				))}
			</Box>
		</Box>
	);
};

export default History;
