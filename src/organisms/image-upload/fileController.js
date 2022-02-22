/* import { useCallback, useRef } from "react";
import { useController, useFormContext } from "react-hook-form";

export function FileController({ name, control, render }) {
	const inputRef = useRef(null);

	const { field } = useController({ name, control });

	const onChange = useCallback(async event => {
		if (event.target.files?.[0]) {
			field.onChange(event.target.files[0]);
		}
	}, []);

	return render({
		field: {
			type: "file",
			name,
			onChange,
			ref: instance => {
				field.ref(instance);
				inputRef.current = instance;
			},
		},
	});
} */
