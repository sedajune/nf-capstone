import Head from "next/head";
import React from "react";
import styled from "@emotion/styled";
import Typography from "../../atoms/typography";

const A = ({ children, className }) => {
	return <div className={className}>{children} </div>;
};

const B = styled(A)`
	background: green;
`;

const Page = () => {
	return (
		<B>
			<Head>
				<title key="title">home</title>
				<meta key="description" name="description" content="Home" />
			</Head>
			<Typography component="h4" variant="h4">
				Plant Buddy
			</Typography>
		</B>
	);
};

export default Page;
