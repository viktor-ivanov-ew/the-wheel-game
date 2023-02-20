import { PrizeType } from "src/types";

export const listItems = [
	{
		type: PrizeType.BOOSTER,
		multiplier: 4,
		animationIndex: 2
	},
	{
		type: PrizeType.HEALTH,
		multiplier: 4,
		animationIndex: 3
	},
	{
		type: PrizeType.DIAMOND,
		multiplier: 1,
		animationIndex: 0
	},
	{
		type: PrizeType.JACKPOT,
		animationIndex: 1
	},
	{
		type: PrizeType.HEALTH,
		multiplier: 1,
		animationIndex: 3
	},
	{
		type: PrizeType.BOOSTER,
		multiplier: 3,
		animationIndex: 2
	},
	{
		type: PrizeType.MONEY,
		multiplier: 2,
		animationIndex: 0
	},
];

export const getListItemOfDrumSection = (deg: number) => {
	const step = 360 / listItems.length;
	const partDeg = deg % 360;

	return listItems[(parseInt(((partDeg - (step * .35)) / (1 * step)).toFixed(1)) + 1) % 7];
};

