import {
	FC,
	PropsWithChildren,
	useEffect
} from "react";
import { IntlProvider } from "react-intl";
import dayjs from "dayjs";
import { MessagesProps } from "./AppIntlProvider.types";
import messagesEn from "../../i18n/en.json";


export const AppIntlProvider: FC<PropsWithChildren<Record<string, unknown>>> = ({
	children
}) => {

	const locale = navigator.language;

	const messages: MessagesProps = {
		en: messagesEn
	};

	useEffect(() => {
		document.documentElement.lang = locale;

		dayjs.locale(locale);
	}, [locale]);

	return (
		<IntlProvider
			locale={locale}
			messages={messages[locale] ?? messages["en"]}
			defaultLocale="en"
			onError={() => null}
		>
			<>
				{children}
			</>
		</IntlProvider>
	);
};

export default AppIntlProvider;
