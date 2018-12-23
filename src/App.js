import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Light } from "./components/Light";
import { Ornament } from "./components/Ornament";
import { Star } from "./components/Star";
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
	generateLights() {
		let lights = [];
		for (let i = 1; i <= 19; i++) {
			lights.push(<Light data-id={i} key={i} />);
		}
		return lights;
	}

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
				<Star>★</Star>
				<TreeSection className="top" />
				<TreeSection className="middle" />
				<TreeSection />
				<TreeTrunk />
				{this.generateOrnaments()}
				{this.generateLights()}
			</XmasTree>
		);
	}
}

export default App;
