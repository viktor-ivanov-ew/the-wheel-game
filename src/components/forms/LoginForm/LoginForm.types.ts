import { LoginFormFields } from "src/types";

export type LoginFormProps = {
	onSubmit: (values: LoginFormFields) => void;
}
