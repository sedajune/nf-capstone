import React from "react";
import Checkbox from "@mui/material/Checkbox";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import SpaIcon from "@mui/icons-material/Spa";
import useStore from "../../ions/hooks/storeFormData";

const FavoriteButton = ({ bookmarked, index }) => {
	const setBookmark = useStore(state => state.setBookmark);
	const plantCards = useStore(state => state.plantCards);

	return (
		<Checkbox
			checked={bookmarked ? bookmarked : false}
			onChange={event => {
				setBookmark(index);
			}}
			inputProps={{ "aria-label": "controlled" }}
			icon={<SpaOutlinedIcon />}
			checkedIcon={<SpaIcon />}
			sx={{ top: 10, left: 290 }}
		/>
	);
};

export default FavoriteButton;
