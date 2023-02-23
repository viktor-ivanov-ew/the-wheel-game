import { FC, useState, useEffect, useCallback } from "react";
import { Box } from "@mui/material";
import { wheelStyles } from "./Wheel.styles";
import { drumSections } from "./Wheel.utils";
import { WheelProps } from "./Wheel.types";

export const Wheel: FC<WheelProps> = ({
	spinLength
}) => {
	const [rotationPosition, setRotationPosition] = useState(0);

	useEffect(() => {
		setRotationPosition(prev => prev + spinLength);
	}, [spinLength]);

	return (
		<Box
			sx={[
				wheelStyles.root,
				{
					transform: `rotateZ(${rotationPosition}deg)`,
					transition: "transform 2s ease-in-out"
				}
			]}
		>
			<Box
				sx={wheelStyles.wheel}
			>
				{drumSections.map((item, i) => (
					<Box
						key={i}
						sx={[
							wheelStyles.drumSection,
							{
								transform: `translate(-5%, calc(17.5vmin + 75px - 52.5%)) rotateZ(${i * (360 / drumSections.length)}deg)`,
								height: "calc((35vmin + 150px) / 2)",
								width: "calc(17.5vmin + 75px)",
								background: item.background,
								clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)"
							}
						]}
					>
						<Box
							sx={[
								wheelStyles.drumWrapper
							]}
						>
							{item.component}
						</Box>
					</Box>
				))}
			</Box>
			<Box
				sx={[
					wheelStyles.niddleWrapper,
					{
						transform: `rotateZ(${-rotationPosition}deg)`,
						transition: "transform 2s ease-in-out"
					}
				]}
			>
				<Box
					sx={wheelStyles.niddle}
				/>
			</Box>
		</Box>
	);
};

export default Wheel;

