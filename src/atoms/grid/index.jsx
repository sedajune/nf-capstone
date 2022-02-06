import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ResponsiveGrid = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}></Grid>
		</Box>
	);
};

export default ResponsiveGrid;
