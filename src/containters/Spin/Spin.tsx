import { useState, useCallback, useEffect } from "react";
import { useIntl } from "react-intl";
import dayjs from "dayjs";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { WinModal } from "src/components";
import { PrizeType } from "src/types";
import { firebaseAuth, firebaseFirestore } from "src/firebase";
import { useHandleError } from "src/hooks";
import Wheel from "./Wheel/Wheel";
import { spinStyles } from "./Spin.styles";
import { getListItemOfDrumSection } from "./Spin.utils";
import { ModalGiftProps } from "./Spin.types";

export const Spin = () => {
	const intl = useIntl();

	const [user, loadingUser, errorUser] = useAuthState(firebaseAuth);

	const [newSpin, setNewSpin] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isSpinning, setIsSpinning] = useState(false);
	const [isPrizePublished, setIsPrizePublished] = useState(true);
	const [isModalOpen, setisModalOpen] = useState(false);
	const [modalGift, setModalGift] = useState<ModalGiftProps | null>(null);

	useHandleError(!loadingUser && !!errorUser, errorUser?.message);

	const handleAddGameHistoryData = useCallback(
		async (prize: PrizeType, multiplier?: number) => {
			if (!user) return;
			const ref = doc(firebaseFirestore, "gameHistory", user.uid);
			const snap = await getDoc(ref);
			if (!snap.exists()) {
				await setDoc(ref, {
					gameHistory: [{
						prize,
						multiplier: multiplier ?? 0,
						time: dayjs(Date.now()).format("HH:mm---DD/MM/YYYY")
					}]
				});
				setIsPrizePublished(true);
			} else {
				await updateDoc(
					ref,
					{
						gameHistory: arrayUnion({
							prize,
							multiplier: multiplier ?? 0,
							time: dayjs(Date.now()).format("HH:mm---DD/MM/YYYY")
						})
					}
				);
				setIsPrizePublished(true);
			}
		},
		[user, firebaseFirestore],
	);

	const handleSpin = useCallback(
		() => {
			setIsPrizePublished(false);
			const index = Math.round(Math.random() * 7);
			const newDeg = (360 * Math.round(((Math.random() * 4) + 2))) + (360 / 7 * index);
			setNewSpin(newDeg);
			setCurrentIndex(prev => (prev + index) % 7);
			setIsSpinning(true);
		},
		[setNewSpin],
	);

	const handleCloseModal = useCallback(
		() => {
			if (!isPrizePublished) return;
			setisModalOpen(false);
		},
		[setisModalOpen, isPrizePublished],
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
			const modalGift = getListItemOfDrumSection(currentIndex);
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
						{
							isPrizePublished ?
								intl.formatMessage({ id: "spinButtonTitle" }) :
								<CircularProgress sx={spinStyles.spinner} />
						}
					</Typography>
				</Button>
			</Box>
			{modalGift &&
				<WinModal
					isPublishing={!isPrizePublished}
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
