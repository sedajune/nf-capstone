import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#26864A",
			contrastText: "#fff",
		},
		secondary: {
			main: "#FFDE7E",
		},
		tertiary: {
			main: "#FFFFE3",
		},
		//text: {
		//	primary: "rgba(0,0,0,0.87)",
		//	secondary: "rgba(255,255,255,255)",
		//},
	},
	typography: {
		fontFamily: "Roboto",
		h1: {
			fontSize: 96,
			fontWeight: 300,
			letterSpacing: "-1.5px",
		},
		h2: {
			fontSize: 60,
			fontWeight: 300,
			letterSpacing: "-0.5px",
		},
		h3: {
			fontSize: 48,
			fontWeight: 400,
			letterSpacing: "0px",
		},
		h4: {
			fontSize: 34,
			fontWeight: 400,
			letterSpacing: "0.25px",
		},
		h5: {
			fontSize: 24,
			fontWeight: 400,
			letterSpacing: "0px",
		},
		h6: {
			fontSize: 20,
			fontWeight: 500,
			letterSpacing: "0.15px",
		},
		subtitle1: {
			fontSize: 16,
			fontWeight: 400,
			letterSpacing: "0.15px",
		},
		subtitle2: {
			fontSize: 14,
			fontWeight: 500,
			letterSpacing: "0.1px",
		},
		body1: {
			fontSize: 16,
			fontWeight: 400,
			letterSpacing: "0.5px",
		},
		body2: {
			fontSize: 14,
			fontWeight: 400,
			letterSpacing: "0.25px",
		},
		button: {
			fontSize: 14,
			fontWeight: 500,
			letterSpacing: "1.25px",
		},
		caption: {
			fontSize: 12,
			fontWeight: 400,
			letterSpacing: "0.4px",
		},
		overline: {
			fontSize: 10,
			fontWeight: 400,
			letterSpacing: "1.5px",
		},
	},
});

export default theme;
