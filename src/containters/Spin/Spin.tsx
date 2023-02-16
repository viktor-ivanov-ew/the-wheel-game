import { useState, useCallback, useEffect } from "react";
import { useIntl } from "react-intl";
import { Box, Typography, Button } from "@mui/material";
import { addDoc, arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import dayjs from "dayjs";
import Wheel from "./Wheel/Wheel";
import { WinModal } from "src/components";
import { PrizeType } from "src/types";
import { firebaseAuth, firebaseFirestore } from "src/firebase";
import { useHandleError } from "src/hooks";
import { spinStyles } from "./Spin.styles";
import { getListItemOfDrumSection } from "./Spin.utils";

export const Spin = () => {
	const intl = useIntl();
	const [user, loadingUser, errorUser] = useAuthState(firebaseAuth);
	const [newSpin, setNewSpin] = useState(0);
	const [currentDeg, setCurrentDeg] = useState(0);
	const [isSpinning, setIsSpinning] = useState(false);
	const [isModalOpen, setisModalOpen] = useState(false);
	const [modalGift, setModalGift] = useState<{ type: PrizeType; multiplier?: number; animationIndex: number } | null>(null);

	useHandleError(!loadingUser && !!errorUser, errorUser?.message);

	const handleAddGameHistoryData = useCallback(
		async (prize: PrizeType, multiplier?: number) => {
			if (!user) return;
			const ref = doc(firebaseFirestore, "gameHistory", user.uid);
			const snap = await getDoc(ref);

			console.log("span",);
			if (!snap.exists()) {
				setDoc(ref, {
					gameHistory: [{
						prize,
						multiplier,
						time: dayjs(Date.now()).format("HH/mm-DD/MM/YYYY")
					}]
				});
			} else {
				updateDoc(
					ref,
					{
						gameHistory: arrayUnion({
							prize,
							multiplier,
							time: dayjs(Date.now()).format("HH/mm-DD/MM/YYYY")
						})
					}
				);
			}
		},
		[user, firebaseFirestore],
	);

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
			const modalGift = getListItemOfDrumSection(currentDeg);
			setIsSpinning(false);
			setModalGift(modalGift);
			handleAddGameHistoryData(modalGift.type, modalGift.multiplier);
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
					animationIndex={modalGift.animationIndex}
				/>
			}
		</>
	);
};

export default Spin;
