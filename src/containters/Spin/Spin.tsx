import { useState, useCallback, useEffect } from "react";
import { useIntl } from "react-intl";
import { Box, Typography, Button } from "@mui/material";
import Wheel from "./Wheel/Wheel";
import { spinStyles } from "./Spin.styles";
import { WinModal } from "src/components";
import { PrizeType } from "src/types";

export const Spin = () => {
	const intl = useIntl();
	const [newSpin, setNewSpin] = useState(0);
	const [isSpinning, setisSpinning] = useState(false);
	const [isModalOpen, setisModalOpen] = useState(true);

	const handleSpin = useCallback(
		() => {
			setNewSpin(360 * ((Math.random() * 4) + 2) + (360 / 7) * ((Math.random() * 6) + 1));
			setisSpinning(true);
		},
		[setNewSpin],
	);

	const handleCloseModal = useCallback(
		() => {
			setisModalOpen(false);
		},
		[setisModalOpen],
	);

	const handleOpenModal = useCallback(
		() => {
			setisModalOpen(true);
		},
		[setisModalOpen],
	);

	useEffect(() => {
		let timeout: NodeJS.Timeout;
		if (!isSpinning) return;
		timeout = setTimeout(() => {
			setisSpinning(false);
		}, 2000);

		return () => {
			clearTimeout(timeout);
		};
	}, [isSpinning]);


	return (
		<>
			<Box
				sx={spinStyles.root}
			>
				<Box
					sx={spinStyles.ribbon}
				>
					<Typography
						sx={spinStyles.ribbonText}
					>
						{intl.formatMessage({ id: "spinPageTitle" })}
					</Typography>
				</Box>
				<Wheel spinLength={newSpin} />
				<Button
					sx={spinStyles.button}
					onClick={handleOpenModal}
					disabled={isSpinning}
				>
					<Typography
						sx={spinStyles.buttonText}
					>
						{intl.formatMessage({ id: "spinButtonTitle" })}
					</Typography>
				</Button>
			</Box>
			<WinModal
				open={isModalOpen}
				onClose={handleCloseModal}
				prize={PrizeType.HEALTH}
				multiplier={2}
			/>
		</>
	);
};

export default Spin;
