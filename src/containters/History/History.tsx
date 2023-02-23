import { Fragment } from "react";
import { useIntl } from "react-intl";
import { Box, Typography } from "@mui/material";
import { doc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import HistoryListItem from "./HistoryListItem/HistoryListItem";
import { useHandleError } from "src/hooks";
import { firebaseAuth, firebaseFirestore } from "src/firebase";
import { getWinModalSubtitle } from "src/components/modal/WinModal/WinModal.utils";
import { UserHistoryDto } from "src/types";
import { historyStyles } from "./History.styles";

export const History = () => {
	const intl = useIntl();

	const [user, loadingUser, errorUser] = useAuthState(firebaseAuth);
	const [userData, loadingUserData, errorUserData] = useDocumentData(
		doc(firebaseFirestore, "gameHistory", `${user?.uid}` ?? "")
	);

	useHandleError(!loadingUserData && !!errorUserData, errorUserData?.message);
	useHandleError(!loadingUser && !!errorUser, errorUser?.message);

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
				{!userData && (
					<Box>
						<Typography>
							{intl.formatMessage({ id: "historyNoGames" })}
						</Typography>
					</Box>
				)}
				{(userData as UserHistoryDto)?.gameHistory?.reverse().map((item, index) => (
					<Fragment key={index}>
						<HistoryListItem
							multiplier={item.multiplier}
							prize={item.prize}
							date={item.time}
							prizeTitle={
								getWinModalSubtitle(item.prize, intl, item.multiplier)
							}
						/>
					</Fragment>
				))}
			</Box>
		</Box>
	);
};

export default History;
