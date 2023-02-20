import { FC } from "react";
import { useIntl } from "react-intl";
import { Box, Button, Modal, Typography, CircularProgress } from "@mui/material";
import Lottie from "react-lottie";
import { WheelItemIcon } from "src/components/common";
import { WinModalProps } from "./WinModal.types";
import { winModalStyles } from "./WinModal.styles";
import { getWinModalSubtitle } from "./WinModal.utils";
import confettiFullScreenAnimation from "./WinModalAnimations/confetti-full-screen.json";
import fallingCoinsAnimations from "./WinModalAnimations/falling-coins.json";
import goldenConfettiNew from "./WinModalAnimations/golden-confetti-new.json";
import goldenParticle from "./WinModalAnimations/golden-particle.json";


export const WinModal: FC<WinModalProps> = ({
	prize,
	multiplier,
	animationIndex,
	isPublishing,
	onClose,
	...rest
}) => {
	const intl = useIntl();
	const animations = [
		confettiFullScreenAnimation,
		fallingCoinsAnimations,
		goldenConfettiNew,
		goldenParticle
	];

	return (
		<Modal
			onClose={onClose}
			{...rest}
			disableAutoFocus
			disableEnforceFocus
			disableRestoreFocus
		>
			<>
				<Lottie
					width={window.screen.width}
					height={window.screen.height}
					options={{
						autoplay: true,
						loop: true,
						animationData: animations[animationIndex],
						rendererSettings: {
							preserveAspectRatio: "xMidYMid slice"
						}
					}}
				/>
				<Box
					sx={winModalStyles.root}
				>
					<Typography
						sx={winModalStyles.title}
					>
						{intl.formatMessage({ id: "winModalTitle" })}
					</Typography>
					<Box
						sx={winModalStyles.icon}
					>
						<WheelItemIcon
							type={prize}
							multiplier={multiplier}
							isModal
						/>
					</Box>
					<Typography
						sx={winModalStyles.subtitle}
					>
						{getWinModalSubtitle(prize, intl, multiplier ?? 0)}
					</Typography>
					<Button
						sx={winModalStyles.button}
						onClick={onClose}
					>
						<Typography
							sx={winModalStyles.buttonText}
						>
							{
								!isPublishing ?
									intl.formatMessage({ id: "winModalSubminButtonTitle" }) :
									<CircularProgress sx={{ maxWidth: "20px", maxHeight: "20px" }} />
							}
						</Typography>
					</Button>
				</Box>
			</>
		</Modal>
	);
};

export default WinModal;
