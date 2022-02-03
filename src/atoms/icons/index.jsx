import React from "react";
import { Icon } from "@iconify/react";
import StyledIcons from "./styled";

const Icon = () => {
	return (
		<StyledIcons {...props}>
			<Icon icon="bx:bx-home-heart" />
			<Icon icon="icon-park-outline:hold-seeds" />
			<Icon icon="uil:shovel" />
			<Icon icon="si-glyph:hat" />
		</StyledIcons>
	);
};

export default Icon;
