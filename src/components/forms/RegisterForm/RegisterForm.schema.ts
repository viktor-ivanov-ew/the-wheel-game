import { object, ref, string } from "yup";

export const registerSchema = object().shape({
	email: string()
		.email("schemaValidEmail")
		.max(255)
		.required("schemaRequiredEmail"),
	password: string()
		.max(255)
		.required("schemaRequiredPassword"),
	confirmPassword: string()
		.max(255)
		.required("schemaRequiredConfirmPassword")
		.oneOf([ref("password")], "schemaMatchConfirmPassword"),
});
