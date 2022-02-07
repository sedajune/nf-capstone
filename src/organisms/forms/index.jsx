import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "../../atoms/button";
import useStore from "../../ions/hooks/storeFormData";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const PlantForm = () => {
	const plantCards = useStore(state => state.plantCards);
	const setPlantCards = useStore(state => state.setPlantCard);

	const [type, setType] = React.useState("");
	const [open, setOpen] = React.useState(false);

	const handleChange = event => {
		setType(event.target.value);
	};

	const { control, handleSubmit } = useForm({
		defaultValues: {
			description: "",
			contactInfo: "",
			soilQuality: "",
			size: "",
			location: "",
			number: "",
			spaceType: "",
		},
	});

	const onSubmit = data => {
		setPlantCards(data);
	};

	return (
		<>
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
							{...field}
						/>
					)}
				/>
				<Controller
					name="size"
					control={control}
					render={({ field }) => (
						<TextField
							label="Size of your space"
							variant="outlined"
							size="large"
							margin="normal"
							{...field}
						/>
					)}
				/>
				<Controller
					name="number"
					control={control}
					render={({ field }) => (
						<TextField
							label="Number of possible buddies"
							variant="outlined"
							size="large"
							margin="normal"
							{...field}
						/>
					)}
				/>
				<Controller
					name="location"
					control={control}
					render={({ field }) => (
						<TextField
							label="Location"
							variant="outlined"
							size="large"
							margin="normal"
							{...field}
						/>
					)}
				/>
				<Controller
					name="soilQuality"
					control={control}
					render={({ field }) => (
						<TextField
							label="Soil quality"
							variant="outlined"
							size="large"
							margin="normal"
							{...field}
						/>
					)}
				/>
				<Controller
					name="contactInfo"
					control={control}
					render={({ field }) => (
						<TextField
							label="Contact Info"
							variant="outlined"
							size="large"
							margin="normal"
							{...field}
						/>
					)}
				/>

				<Controller
					name="spaceType"
					control={control}
					render={({ field }) => (
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Type of space</InputLabel>
							<Select
								value={type}
								labelId="controlled-open-select-label"
								id="controlled-open-select"
								open={open}
								size="large"
								onClose={ev => {
									setOpen(false);
								}}
								onOpen={ev => {
									setOpen(true);
								}}
								label="type of space"
								onChange={handleChange}
							>
								<MenuItem>Garden/Piece of land</MenuItem>
								<MenuItem>Terrace</MenuItem>
								<MenuItem>Balcony</MenuItem>
								<MenuItem>Other</MenuItem>
							</Select>
						</FormControl>
					)}
				/>
				<br />
				<br />
				<Button>Create your entry</Button>
			</form>
		</>
	);
};

export default PlantForm;
