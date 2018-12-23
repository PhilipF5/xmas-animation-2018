import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Ornament } from "./components/Ornament";
import { TreeSection } from "./components/TreeSection";
import { TreeTrunk } from "./components/TreeTrunk";

const XmasTree = styled.div`
	align-items: center;
	border: 2px solid black;
	display: inline-flex;
	flex-direction: column;
	height: 600px;
	justify-content: flex-end;
	position: relative;
	width: 400px;
`;

class App extends Component {
	render() {
		return (
			<XmasTree>
				<TreeSection className="top" />
				<TreeSection className="middle" />
				<TreeSection />
				<TreeTrunk />
				<Ornament data-id="1" />
				<Ornament data-id="2" />
				<Ornament data-id="3" />
				<Ornament data-id="4" />
				<Ornament data-id="5" />
				<Ornament data-id="6" />
				<Ornament data-id="7" />
				<Ornament data-id="8" />
				<Ornament data-id="9" />
			</XmasTree>
		);
	}
}

export default App;
