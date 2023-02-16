import { ModalProps } from "@mui/material";
import { PrizeType } from "src/types";

export type WinModalProps = Omit<ModalProps, "children" | "onClose"> & {
	prize: PrizeType;
	multiplier?: number;
	animationIndex: number;
	onClose: () => void;
}
