import { PrizeType } from "src/types";

export const listItems = [
	{
		type: PrizeType.BOOSTER,
		multiplier: 4
	},
	{
		type: PrizeType.HEALTH,
		multiplier: 4
	},
	{
		type: PrizeType.DIAMOND,
		multiplier: 1
	},
	{
		type: PrizeType.JACKPOT
	},
	{
		type: PrizeType.HEALTH,
		multiplier: 1
	},
	{
		type: PrizeType.BOOSTER,
		multiplier: 3
	},
	{
		type: PrizeType.MONEY,
		multiplier: 2
	},
];

export const getListItemOfDrumSection = (deg: number) => {
	const step = 360 / listItems.length;
	const partDeg = deg % 360;

	return listItems[(parseInt(((partDeg - (step * .35)) / (1 * step)).toFixed(1)) + 1) % 7];
};

