import { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { useIntl } from "react-intl";
import { doc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { PrizeType } from "src/types";
import { firebaseAuth, firebaseFirestore } from "src/firebase";
import HistoryListItem from "./HistoryListItem/HistoryListItem";
import { historyStyles } from "./History.styles";
import { getWinModalSubtitle } from "src/components/modal/WinModal/WinModal.utils";

export const History = () => {
	const intl = useIntl();
	const [user, loadingUser, errorUser] = useAuthState(firebaseAuth);

	const [userData, loadingUserData, errorUserData] = useDocumentData(
		doc(firebaseFirestore, "gameHistory", `${user?.uid}` ?? "")
	);

	return (
		<Box
			sx={historyStyles.root}
		>
			<Box
				sx={historyStyles.titleWrapper}
			>
				<Typography variant="h3">
					{intl.formatMessage({ id: "historyPageTitle" })}
				</Typography>
			</Box>
			<Box
				sx={historyStyles.gamesList}
			>
				{(userData as any)?.gameHistory?.reverse().map((item: any, i: number) => (
					<Fragment key={i}>
						<HistoryListItem
							multiplier={item.multiplier}
							prize={item.prize}
							date={item.time}
							prizeTitle={getWinModalSubtitle(item.prize, intl, item.multiplier)}
						/>
					</Fragment>
				))}
			</Box>
		</Box>
	);
};

export default History;
