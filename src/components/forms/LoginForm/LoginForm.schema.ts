import { object, string } from "yup";

export const loginSchema = object().shape({
	email: string()
		.email("schemaValidEmail")
		.max(255)
		.required("schemaRequiredEmail"),
	password: string()
		.max(255)
		.required("schemaRequiredPassword")
});
