import { PrizeType } from "../enums";

export type UserHistoryDto = {
	gameHistory: Array<GameHistory>
}

type GameHistory = {
	multiplier: number;
	prize: PrizeType;
	time: string;
}
