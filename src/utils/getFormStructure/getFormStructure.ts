const email = {
	label: "email",
	name: "email",
	id: "email",
	type: "text",
	placeholder: "example@example.com",
};

const password = {
	label: "password",
	name: "password",
	id: "password",
	type: "password",
	placeholder: "",
};

const confirmPassword = {
	...password,
	label: "confirmPassword",
	name: "confirmPassword",
};

export const getFormStructure = () => {
	const signUpStructure = [email, password, confirmPassword];
	const logInStructure = [email, password];

	return { signUpStructure, logInStructure };
};
