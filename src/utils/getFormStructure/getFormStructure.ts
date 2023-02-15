import { IntlShape } from "react-intl";

const email = (intl: IntlShape) => ({
	label: intl.formatMessage({id: "emailFieldLabel"}),
	name: "email",
	id: "email",
	type: "text",
	placeholder: "",
});

const password = (intl: IntlShape) => ({
	label: intl.formatMessage({id: "passwordFieldLabel"}),
	name: "password",
	id: "password",
	type: "password",
	placeholder: "",
});

const confirmPassword = (intl: IntlShape) => ({
	...password(intl),
	label: intl.formatMessage({id: "confirmPasswordFieldLabel"}),
	name: "confirmPassword",
});

export const getFormStructure = (intl: IntlShape) => {
	const signUpStructure = [email(intl), password(intl), confirmPassword(intl)];
	const logInStructure = [email(intl), password(intl)];

	return { signUpStructure, logInStructure };
};
