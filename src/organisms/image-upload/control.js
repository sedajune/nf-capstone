import React, { useCallback, useState } from "react";
import { useController } from "react-hook-form";

import { getBase64 } from "./utils";

export function Control({ name, errors, control }) {
	const { field } = useController({ name, control });
	const [image, setImage] = useState();

	const onFileChange = useCallback(async event => {
		if (event.target.files?.[0]) {
			const base64 = await getBase64(event.target.files[0]);

			setImage(base64);
			field.onChange(event.target.files);
		}
	}, []);

	return (
		<div>
			{image && <img src={image} width="100px" />}
			<input type="file" onChange={onFileChange} />
			<p>{errors[name]?.message}</p>
		</div>
	);
}
