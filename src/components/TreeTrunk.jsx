import React, { Component } from "react";
import styled from "styled-components";

export const TreeTrunk = styled.div`
	background-color: saddlebrown;
	filter: brightness(1);
	height: 75px;
	width: 50px;

	&.night {
		filter: brightness(0.2);
	}
`;
