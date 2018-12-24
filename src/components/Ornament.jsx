import styled from "styled-components";

export const Ornament = styled.div`
	border-radius: 25px;
	filter: brightness(1);
	height: 25px;
	position: absolute;
	width: 25px;

	&.night {
		filter: brightness(0.5);
	}

	&[data-id="1"] {
		background-color: red;
		left: 45%;
		top: 45%;
	}

	&[data-id="2"] {
		background-color: red;
		left: 62%;
		top: 60%;
	}

	&[data-id="3"] {
		background-color: blue;
		left: 38%;
		top: 65%;
	}

	&[data-id="4"] {
		background-color: silver;
		left: 35%;
		top: 54%;
	}

	&[data-id="5"] {
		background-color: blue;
		left: 55%;
		top: 50%;
	}

	&[data-id="6"] {
		background-color: goldenrod;
		left: 48%;
		top: 57%;
	}

	&[data-id="7"] {
		background-color: silver;
		left: 50%;
		top: 68%;
	}

	&[data-id="8"] {
		background-color: red;
		left: 25%;
		top: 70%;
	}

	&[data-id="9"] {
		background-color: goldenrod;
		left: 40%;
		top: 75%;
	}

	&[data-id="10"] {
		background-color: blue;
		left: 57%;
		top: 76%;
	}

	&[data-id="11"] {
		background-color: silver;
		left: 27%;
		top: 80%;
	}

	&[data-id="12"] {
		background-color: red;
		left: 47%;
		top: 83%;
	}

	&[data-id="13"] {
		background-color: goldenrod;
		left: 68%;
		top: 81%;
	}
`;
