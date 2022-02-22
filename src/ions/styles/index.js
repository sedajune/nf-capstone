import { css } from "@emotion/react";

export const globalStyle = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
	}

	body {
		height: 100%;
		margin: 0;
		background: #fffafa;
		font-size: 1rem;
	}
`;
