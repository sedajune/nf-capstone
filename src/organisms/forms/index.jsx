import React from "react";
//import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "../../atoms/button";

const PlantForm = () => {
	const [age, setAge] = React.useState("");
	const [open, setOpen] = React.useState(false);

	const handleChange = event => {
		setAge(event.target.value);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const { control, handleSubmit } = useForm({
		defaultValues: {
			description: "",
			select: {},
		},
	});
	const onSubmit = data => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name="Description"
				control={control}
				render={({ field }) => (
					<TextField
						id="outlined-basic"
						label="Find a welcoming title"
						variant="outlined"
						size="large"
						margin="normal"
						{...field}
					/>
				)}
			/>
			<Controller
				name="Size"
				control={control}
				render={({ field }) => (
					<TextField
						id="outlined-basic"
						label="Size of your space"
						variant="outlined"
						size="large"
						margin="normal"
						{...field}
					/>
				)}
			/>
			<Controller
				name="Number"
				control={control}
				render={({ field }) => (
					<TextField
						id="outlined-basic"
						label="Number of possible buddies"
						variant="outlined"
						size="large"
						margin="normal"
						{...field}
					/>
				)}
			/>
			<Controller
				name="Location"
				control={control}
				render={({ field }) => (
					<TextField
						id="outlined-basic"
						label="Location"
						variant="outlined"
						size="large"
						margin="normal"
						{...field}
					/>
				)}
			/>
			<Controller
				name="Soil quality"
				control={control}
				render={({ field }) => (
					<TextField
						id="outlined-basic"
						label="Soil quality"
						variant="outlined"
						size="large"
						margin="normal"
						{...field}
					/>
				)}
			/>
			<Controller
				name="Contact Info"
				control={control}
				render={({ field }) => (
					<TextField
						id="outlined-basic"
						label="Contact Info"
						variant="outlined"
						size="large"
						margin="normal"
						{...field}
					/>
				)}
			/>

			<Controller
				name="select type of space"
				control={control}
				render={({ field }) => (
					<Select
						labelId="demo-controlled-open-select-label"
						id="demo-controlled-open-select"
						open={open}
						onClose={handleClose}
						onOpen={handleOpen}
						label="type of space"
						onChange={handleChange}
					>
						<MenuItem>Garden/Piece of land</MenuItem>
						<MenuItem>Terrace</MenuItem>
						<MenuItem>Balcony</MenuItem>
						<MenuItem>Other</MenuItem>
					</Select>
				)}
			/>
			<br />
			<br />
			<Button>Create your entry</Button>
		</form>
	);
};

export default PlantForm;
