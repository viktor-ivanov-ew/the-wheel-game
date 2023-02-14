import { PrizeType } from "src/types";

export type HistoryListItemProps = {
	prize: PrizeType;
	date: string;
	prizeTitle: string;
	multiplier?: number;
}
