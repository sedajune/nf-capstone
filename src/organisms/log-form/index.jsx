import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import useStore from "../../ions/hooks/storeFormData";
import ImageUpload from "../image-upload";
import { useRouter } from "next/router";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Stack from "@mui/material/Stack";

const LogForm = () => {
	const logCards = useStore(state => state.logCards);
	const setLogCards = useStore(state => state.setLogCard);
	const [images, setImages] = useState([]);

	const router = useRouter();

	const [value, setValue] = React.useState(new Date());

	const handleChange = newValue => {
		setValue(newValue);
	};

	const { control, handleSubmit } = useForm({
		defaultValues: {
			date: "",
			plantName: "",
			logNotes: "",
		},
	});

	const handleUpload = uploadedImages => {
		setImages(uploadedImages);
	};

	const onSubmit = data => {
		setLogCards({ ...data, images });
		router.push("/plant-log");
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="date"
					control={control}
					render={({ field }) => (
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<Stack spacing={3}>
								<DatePicker
									label="Responsive"
									openTo="year"
									views={["year", "month", "day"]}
									value={value}
									onChange={newValue => {
										setValue(newValue);
									}}
									renderInput={params => <TextField {...params} />}
								/>
							</Stack>
						</LocalizationProvider>
					)}
				/>
				<ImageUpload onUpload={handleUpload} />
				<Controller
					name="plantName"
					control={control}
					render={({ field }) => (
						<TextField
							label="Plant Name:"
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
					name="logNotes"
					control={control}
					render={({ field }) => (
						<TextField
							sx={{ mb: "2.5rem" }}
							label="Notes/Reminders/Important Info:"
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

export default LogForm;
