import React, { Component } from "react";
import styled from "styled-components";

export const TreeSection = styled.div`
	border-bottom: 150px solid green;
	border-left: 150px solid transparent;
	border-right: 150px solid transparent;
	height: 0;
	width: 0;

	&.top {
		position: relative;
		transform: translateY(115px) scale(0.6);
		transform-origin: bottom center;
	}

	&.middle {
		position: relative;
		transform: translateY(50px) scale(0.8);
		transform-origin: bottom center;
	}
`;
