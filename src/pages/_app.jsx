import { Global } from "@emotion/react";
import React from "react";
import { globalStyle } from "../ions/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../ions/theme";
import { SessionProvider } from "next-auth/react";

const App = ({ Component, pageProps }) => {
	return (
		<SessionProvider session={pageProps.session}>
			<ThemeProvider theme={theme}>
				<Global styles={globalStyle} />
				<Component {...pageProps} />
			</ThemeProvider>
		</SessionProvider>
	);
};

export default App;
