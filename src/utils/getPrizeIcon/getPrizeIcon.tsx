import { PrizeType } from "src/types";
import boosterIcon from "../../assets/prizeIcons/boosterIcon.svg";
import crownIcon from "../../assets/prizeIcons/crownIcon.svg";
import diamondIcon from "../../assets/prizeIcons/diamondIcon.svg";
import healthIcon from "../../assets/prizeIcons/healthIcon.svg";
import moneyIcon from "../../assets/prizeIcons/moneyIcon.svg";

export const getPrizeIcon = (prizeType: PrizeType) => {
	if (prizeType === PrizeType.BOOSTER) return boosterIcon;
	if (prizeType === PrizeType.DIAMOND) return diamondIcon;
	if (prizeType === PrizeType.HEALTH) return healthIcon;
	if (prizeType === PrizeType.JACKPOT) return crownIcon;
	if (prizeType === PrizeType.MONEY) return moneyIcon;
	return "";
};
