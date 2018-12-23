import React, { Component } from "react";
import styled from "styled-components";

export const Star = styled.div`
	color: gold;
	font-size: 42px;
	position: relative;
	transform: translateY(195px);
	z-index: 10;

	&.night {
		filter: brightness(0.5);
	}
`;
