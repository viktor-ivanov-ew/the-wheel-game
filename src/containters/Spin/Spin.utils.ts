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

(() => {
	console.log("a", listItems[0].type);
})();

export const getListItemOfDrumSection = (index: number) => {
	console.log("index", index);
	return listItems[index];
};

