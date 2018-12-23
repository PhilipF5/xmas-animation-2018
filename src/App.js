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
	generateOrnaments() {
		let ornaments = [];
		for (let i = 1; i <= 13; i++) {
			ornaments.push(<Ornament data-id={i} key={i} />);
		}
		return ornaments;
	}

	render() {
		return (
			<XmasTree>
				<TreeSection className="top" />
				<TreeSection className="middle" />
				<TreeSection />
				<TreeTrunk />
				{this.generateOrnaments()}
			</XmasTree>
		);
	}
}

export default App;
