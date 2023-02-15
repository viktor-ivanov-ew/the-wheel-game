import { IntlShape } from "react-intl";
import { PrizeType } from "src/types";

export const getWinModalSubtitle = (prize: PrizeType, intl: IntlShape, multiplier: number) => {
	if (prize === PrizeType.BOOSTER) return intl.formatMessage({ id: "winBoosterSubtitle" }, { amount: multiplier });
	if (prize === PrizeType.DIAMOND) return intl.formatMessage({ id: "winDiamondSubtitle" }, { amount: multiplier });
	if (prize === PrizeType.HEALTH) return intl.formatMessage({ id: "winHealthSubtitle" }, { amount: multiplier });
	if (prize === PrizeType.JACKPOT) return intl.formatMessage({ id: "winJackpotSubtitle" });
	if (prize === PrizeType.MONEY) return intl.formatMessage({ id: "winMoneySubtitle" }, { amount: multiplier });
	return "";
};
