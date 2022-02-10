import React from "react";
import Checkbox from "@mui/material/Checkbox";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import SpaIcon from "@mui/icons-material/Spa";

const FavoriteButton = () => {
	const [checked, setChecked] = React.useState(false);

	const handleChange = event => {
		setChecked(event.target.checked);
	};
	return (
		<Checkbox
			checked={checked}
			onChange={handleChange}
			inputProps={{ "aria-label": "controlled" }}
			icon={<SpaOutlinedIcon />}
			checkedIcon={<SpaIcon />}
		/>
	);
};

export default FavoriteButton;
