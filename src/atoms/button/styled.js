import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

const StyledButton = styled.button`
	padding: 0.5em 1em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${pxToRem(4)};
	background: #ffffe3;
	color: #000;
	font-size: 1em;

	&:hover {
		background: #ffde7e;
	}

	&:active {
		background: #ffffe3;
	}
`;

export default StyledButton;
