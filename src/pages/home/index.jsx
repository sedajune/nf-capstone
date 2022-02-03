import Head from "next/head";
import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

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
			<h1>Plant Buddy</h1>
			<Image
				src="https://images.unsplash.com/photo-1532978678576-8e855616398d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
				alt="seedlings"
				width={390}
				height={800}
				layout="responsive"
			/>
		</B>
	);
};

export default Page;
