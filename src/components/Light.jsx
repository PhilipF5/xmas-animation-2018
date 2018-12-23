import styled from "styled-components";
import randomColor from "randomcolor";

export const Light = styled.div`
	background-color: currentColor;
	border-radius: 2px;
	height: 2px;
	position: absolute;
	width: 2px;

	&.night {
		filter: brightness(0.5);

		&.on {
			filter: contrast(200%);
			box-shadow: 0 0 15px 6px currentColor;
		}
	}

	&[data-id="1"] {
		color: ${generateColor()};
		left: 22%;
		top: 85%;
	}

	&[data-id="2"] {
		color: ${generateColor()};
		left: 40%;
		top: 82%;
	}

	&[data-id="3"] {
		color: ${generateColor()};
		left: 60%;
		top: 83%;
	}

	&[data-id="4"] {
		color: ${generateColor()};
		left: 79%;
		top: 86%;
	}

	&[data-id="5"] {
		color: ${generateColor()};
		left: 68%;
		top: 78%;
	}

	&[data-id="6"] {
		color: ${generateColor()};
		left: 51%;
		top: 77%;
	}

	&[data-id="7"] {
		color: ${generateColor()};
		left: 34%;
		top: 76%;
	}

	&[data-id="8"] {
		color: ${generateColor()};
		left: 44%;
		top: 72%;
	}

	&[data-id="9"] {
		color: ${generateColor()};
		left: 60%;
		top: 71%;
	}

	&[data-id="10"] {
		color: ${generateColor()};
		left: 70%;
		top: 68%;
	}

	&[data-id="11"] {
		color: ${generateColor()};
		left: 57%;
		top: 64%;
	}

	&[data-id="12"] {
		color: ${generateColor()};
		left: 49%;
		top: 66%;
	}

	&[data-id="13"] {
		color: ${generateColor()};
		left: 40%;
		top: 62%;
	}

	&[data-id="14"] {
		color: ${generateColor()};
		left: 30%;
		top: 67%;
	}

	&[data-id="15"] {
		color: ${generateColor()};
		left: 58%;
		top: 58%;
	}

	&[data-id="16"] {
		color: ${generateColor()};
		left: 65%;
		top: 54%;
	}

	&[data-id="17"] {
		color: ${generateColor()};
		left: 45%;
		top: 55%;
	}

	&[data-id="18"] {
		color: ${generateColor()};
		left: 41%;
		top: 50%;
	}

	&[data-id="19"] {
		color: ${generateColor()};
		left: 55%;
		top: 48%;
	}
`;

function generateColor() {
	return randomColor({ luminosity: "light" });
}
