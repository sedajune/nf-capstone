import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import useStore from "../../ions/hooks/storeFormData";
import ImageUpload from "../image-upload";
import { useRouter } from "next/router";

const SeedForm = () => {
	const seedCards = useStore(state => state.seedCards);
	const setSeedCards = useStore(state => state.setSeedCard);

	const type = useStore(state => state.type);

	const [open, setOpen] = useState(false);

	const [seedType, setSeedType] = useState("");

	const router = useRouter();

	const handleChange = event => {
		setType(event.target.value);
	};

	const { control, handleSubmit } = useForm({
		defaultValues: {
			seedName: "",
			uploadedImage: "image",
			contactInfo: "",
			seedDetails: "",
			zipCode: "",
			type: "",
		},
	});

	const onSubmit = data => {
		setSeedCards(data);
		router.push("/seed-exchange");
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="seedName"
					control={control}
					render={({ field }) => (
						<TextField
							label="Name of the plant seeds/seedling"
							variant="outlined"
							size="large"
							margin="normal"
							fullWidth
							required
							{...field}
						/>
					)}
				/>
				<ImageUpload />
				<Controller
					name="zipCode"
					control={control}
					render={({ field }) => (
						<TextField
							label="Your zip code:"
							variant="outlined"
							size="normal"
							margin="normal"
							type="number"
							required
							fullWidth
							{...field}
						/>
					)}
				/>

				<Controller
					name="type"
					control={control}
					render={({ field }) => (
						<TextField
							id="select-space"
							select
							label="Type"
							value={seedType}
							onChange={handleChange}
							helperText="Please select your type"
							margin="normal"
							{...field}
						>
							{type.map(option => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					)}
				/>

				<Controller
					name="contactInfo"
					control={control}
					render={({ field }) => (
						<TextField
							fullWidth
							label="Contact Info"
							variant="outlined"
							size="large"
							margin="normal"
							required
							{...field}
						/>
					)}
				/>
				<Controller
					name="seedDetails"
					control={control}
					render={({ field }) => (
						<TextField
							sx={{ mb: "2.5rem" }}
							label="Tell me more about your seeds/seedlings:"
							multiline
							fullWidth
							rows={6}
							variant="outlined"
							size="large"
							margin="normal"
							{...field}
						/>
					)}
				/>
				<Button sx={{ mb: "3.5rem" }} variant="outlined" type="submit">
					Create your entry
				</Button>
			</form>
		</>
	);
};

export default SeedForm;
