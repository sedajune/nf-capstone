import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "../../atoms/button";
import useStore from "../../ions/hooks/storeFormData";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

const PlantForm = () => {
	const plantCards = useStore(state => state.plantCards);
	const setPlantCards = useStore(state => state.setPlantCard);

	const plantSpaces = [
		{
			value: "garden",
			label: "garden",
		},
		{
			value: "piece of land",
			label: "piece of land",
		},
		{
			value: "terrace",
			label: "terrace",
		},
		{
			value: "balcony",
			label: "balcony",
		},
		{
			value: "other",
			label: "other",
		},
	];

	const [spaceType, setSpaceType] = React.useState("");
	const [open, setOpen] = React.useState(false);

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
							fullWidth
							required
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
							size="normal"
							margin="normal"
							type="number"
							required
							{...field}
							InputProps={{
								endAdornment: <InputAdornment position="end">m²</InputAdornment>,
							}}
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
							size="normal"
							margin="normal"
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
							label="Soil quality"
							variant="outlined"
							size="normal"
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
					name="tellMeMore"
					control={control}
					render={({ field }) => (
						<TextField
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
				<br />
				<br />
				<Button>Create your entry</Button>
			</form>
		</>
	);
};

export default PlantForm;
