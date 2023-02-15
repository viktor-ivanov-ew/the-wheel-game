import { useEffect } from "react";
import { useSnackbar } from "notistack";

export const useHandleError = (
	errorTrigger: boolean,
	errorText?: string
) => {
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		if (errorTrigger && errorText) enqueueSnackbar(errorText, {
			variant: "error"
		});
	}, [errorTrigger, errorText]);


};
