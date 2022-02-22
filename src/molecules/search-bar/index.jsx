import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import useStore from "../../ions/hooks/storeFormData";

const SearchBar = () => {
	const [search, setSearch] = useState("");
	const results = useStore(state => state.results);

	//useEffect(() => {
	//	const setResults = useSearch.getState().setResults;
	//});

	return (
		<Paper
			component="form"
			sx={{
				p: "2px 4px 4px 2px",
				display: "flex",
				alignItems: "center",
				width: 345,
				m: "20px",
			}}
		>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="Search"
				inputProps={{ "aria-label": "search" }}
				value={search}
				onChange={event => {
					setSearch(event.target.value);
				}}
			/>
			<IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
				<SearchIcon />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
