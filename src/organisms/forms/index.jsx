import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import useStore from "../../ions/hooks/storeFormData";
import ImageUpload from "../image-upload";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

//import Map from "../../molecules/map";

const PlantForm = () => {
	const plantCards = useStore(state => state.plantCards);
	const setPlantCards = useStore(state => state.setPlantCard);
	const [images, setImages] = useState([]);

	const plantSpaces = useStore(state => state.plantSpaces);

	const soilQualities = useStore(state => state.soilQualities);

	const [spaceType, setSpaceType] = useState("");
	const [open, setOpen] = useState(false);

	const [soilType, setSoilType] = useState("");

	const router = useRouter();

	const handleChange = event => {
		setSpaceType(event.target.value);
	};

	const { control, handleSubmit } = useForm({
		defaultValues: {
			description: "",
			contactInfo: "",
			soilQuality: "",
			size: "",
			location: "",
			zipCode: "",
			number: "",
			spaceType: "",
		},
	});
	const handleUpload = uploadedImages => {
		setImages(uploadedImages);
	};
	const onSubmit = data => {
		setPlantCards({ ...data, images });
		router.push("/main");
	};

	return (
		<Box sx={{ mx: "10px" }}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="description"
					control={control}
					render={({ field }) => (
						<TextField
							label="Find a welcoming title"
							variant="outlined"
							size="large"
							margin="normal"
							fullWidth
							required
							{...field}
						/>
					)}
				/>
				<Stack>
					<ImageUpload onUpload={handleUpload} />
				</Stack>
				<Controller
					name="location"
					control={control}
					render={({ field }) => (
						<TextField
							label="Location"
							variant="outlined"
							size="normal"
							margin="normal"
							required
							fullWidth
							{...field}
						/>
					)}
				/>
				<Controller
					name="zipCode"
					control={control}
					render={({ field }) => (
						<TextField
							label="Your Zip Code:"
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
					name="number"
					control={control}
					render={({ field }) => (
						<TextField
							label="Number of buddies"
							variant="outlined"
							size="normal"
							margin="normal"
							type="number"
							fullWidth
							{...field}
						/>
					)}
				/>
				<Controller
					name="size"
					control={control}
					render={({ field }) => (
						<TextField
							label="Size of space in m²"
							variant="outlined"
							size="normal"
							margin="normal"
							type="number"
							required
							{...field}
						/>
					)}
				/>
				<Controller
					name="soilQuality"
					control={control}
					render={({ field }) => (
						<TextField
							id="select-space"
							select
							label="Type of soil"
							value={soilType}
							onChange={handleChange}
							helperText="Please select your soil"
							margin="normal"
							{...field}
						>
							{soilQualities.map(option => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					)}
				/>
				<Controller
					name="spaceType"
					control={control}
					render={({ field }) => (
						<TextField
							id="outlined-select-space"
							select
							label="Type of space"
							value={spaceType}
							onChange={handleChange}
							helperText="Please select your space"
							margin="normal"
							fullWidth
							{...field}
						>
							{plantSpaces.map(option => (
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
					name="tellMeMore"
					control={control}
					render={({ field }) => (
						<TextField
							sx={{ mb: "2.5rem" }}
							label="Tell me more about your motivation"
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
		</Box>
	);
};

export default PlantForm;
