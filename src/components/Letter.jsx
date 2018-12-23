import styled from "styled-components";

export const Letter = styled.div`
	align-items: center;
	background-color: white;
	display: flex;
	font-size: 20px;
	font-weight: bold;
	height: 1.5em;
	justify-content: center;
	margin: 5px;
	width: 1.5em;

	&:nth-of-type(odd) {
		color: red;
		transform: rotateZ(2.5deg);
	}

	&:nth-of-type(even) {
		color: green;
		transform: rotateZ(-2.5deg);
	}

	&[data-letter="Y"] {
		margin-right: 10px;
	}
`;
