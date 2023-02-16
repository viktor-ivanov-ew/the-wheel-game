import { useState, useCallback, useEffect } from "react";
import { useIntl } from "react-intl";
import { Box, Typography, Button } from "@mui/material";
import Wheel from "./Wheel/Wheel";
import { spinStyles } from "./Spin.styles";
import { WinModal } from "src/components";
import { PrizeType } from "src/types";
import { getListItemOfDrumSection } from "./Spin.utils";

export const Spin = () => {
	const intl = useIntl();
	const [newSpin, setNewSpin] = useState(0);
	const [currentDeg, setCurrentDeg] = useState(0);
	const [isSpinning, setIsSpinning] = useState(false);
	const [isModalOpen, setisModalOpen] = useState(false);
	const [modalGift, setModalGift] = useState<{ type: PrizeType; multiplier?: number; } | null>(null);

	const handleSpin = useCallback(
		() => {
			const newDeg = 360 * ((Math.random() * 4) + 2) + (360 / 7) * ((Math.random() * 6) + 1);
			setNewSpin(newDeg);
			setCurrentDeg(prev => prev + newDeg);
			setIsSpinning(true);
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
			setIsSpinning(false);
			setModalGift(getListItemOfDrumSection(currentDeg));
			handleOpenModal();
		}, 2500);

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
					onClick={handleSpin}
					disabled={isSpinning}
				>
					<Typography
						sx={spinStyles.buttonText}
					>
						{intl.formatMessage({ id: "spinButtonTitle" })}
					</Typography>
				</Button>
			</Box>
			{modalGift &&
				<WinModal
					open={isModalOpen}
					onClose={handleCloseModal}
					prize={modalGift.type}
					multiplier={modalGift.multiplier}
				/>
			}
		</>
	);
};

export default Spin;
