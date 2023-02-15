import { FC } from "react";
import { useIntl } from "react-intl";
import { Box, Button, Modal, Typography } from "@mui/material";
import { WheelItemIcon } from "src/components/common";
import { WinModalProps } from "./WinModal.types";
import { winModalStyles } from "./WinModal.styles";
import { getWinModalSubtitle } from "./WinModal.utils";

export const WinModal: FC<WinModalProps> = ({
	prize,
	multiplier,
	onClose,
	...rest
}) => {
	const intl = useIntl();

	return (
		<Modal
			onClose={onClose}
			{...rest}
			disableAutoFocus
			disableEnforceFocus
			disableRestoreFocus
		>
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
						{intl.formatMessage({ id: "winModalSubminButtonTitle" })}
					</Typography>
				</Button>
			</Box>
		</Modal>
	);
};

export default WinModal;
