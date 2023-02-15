import { PrizeType } from "src/types";
import { WheelItemIcon } from "../../../components";

export const drumSections = [
	{
		component: <WheelItemIcon
			type={PrizeType.DIAMOND}
			multiplier={1}
		/>,
		background: "linear-gradient(202.52deg, #CC890B 0.99%, #FFF38F 82.11%)"
	},
	{
		component: <WheelItemIcon
			type={PrizeType.HEALTH}
			multiplier={4}
		/>,
		background: "linear-gradient(202.52deg, #C99024 0.99%, #FFEE5D 77.71%)"
	},
	{
		component: <WheelItemIcon
			type={PrizeType.BOOSTER}
			multiplier={4}
		/>,
		background: "linear-gradient(202.52deg, #CC890B 0.99%, #FFF38F 82.11%)"
	},
	{
		component: <WheelItemIcon
			type={PrizeType.MONEY}
			multiplier={2}
		/>,
		background: "linear-gradient(202.52deg, #C99024 0.99%, #FFEE5D 81.68%)"
	},
	{
		component: <WheelItemIcon
			type={PrizeType.BOOSTER}
			multiplier={3}
		/>,
		background: "linear-gradient(202.52deg, #CC890B 0.99%, #FFF38F 82.11%)"
	},
	{
		component: <WheelItemIcon
			type={PrizeType.HEALTH}
			multiplier={1}
		/>,
		background: "linear-gradient(202.52deg, #CC890B 0.99%, #FFF38F 82.11%)"
	},
	{
		component: <WheelItemIcon
			type={PrizeType.JACKPOT}
		/>,
		background: "linear-gradient(202.52deg, #C99024 0.99%, #FFEE5D 77.71%)",
	}
];
