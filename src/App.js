import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Back, Linear, TimelineLite } from "gsap";
import styled from "styled-components";
import { Light } from "./components/Light";
import { Ornament } from "./components/Ornament";
import { Star } from "./components/Star";
import { TreeSection } from "./components/TreeSection";
import { TreeTrunk } from "./components/TreeTrunk";

const XmasTree = styled.div`
	align-items: center;
	background: linear-gradient(to bottom, white 0%, white 100%);
	border: 2px solid black;
	display: inline-flex;
	flex-direction: column;
	height: 600px;
	justify-content: flex-end;
	overflow: hidden;
	position: relative;
	width: 400px;

	&.night {
		background: linear-gradient(to bottom, black 75%, #418191 100%);
	}
`;

class App extends Component {
	timeline;

	buildTimeline() {
		let timeline = new TimelineLite()
			.from(".trunk", 1, { y: 200, ease: Linear.easeInOut })
			.addLabel(".branches.bottom", "-=0.25")
			.from(".branches.bottom", 1, { y: 300, ease: Linear.easeInOut }, "branches-bottom")
			.from(".branches.bottom", 0.5, { scaleX: 0.1, ease: Linear.easeInOut }, "branches-bottom+=1.5")
			.addLabel("branches-middle", "branches-bottom+=0.25")
			.from(".branches.middle", 1, { y: 350, ease: Linear.easeInOut }, "branches-middle")
			.from(".branches.middle", 0.5, { scaleX: 0.1, ease: Linear.easeInOut }, "branches-middle+=1.5")
			.addLabel("branches-top", "branches-middle+=0.25")
			.from(".branches.top", 1, { y: 500, ease: Linear.easeInOut }, "branches-top")
			.from(".branches.top", 0.5, { scaleX: 0.1, ease: Linear.easeInOut }, "branches-top+=1.5")
			.addLabel("begin-lights", "branches-top+=2")
			.addLabel("begin-ornaments", "begin-lights+=1")
			.staggerFrom(".ornament", 0.5, { scale: 0, ease: Back.easeOut }, 0.1, "begin-ornaments")
			.from(".star", 1, { rotationX: -90, transformOrigin: "bottom center", ease: Back.easeOut })
			.to("*", 3, { className: "+=night" })
			.set([".light", ".star"], { className: "+=on" }, "+=1");

		for (let i = 1; i <= 19; i++) {
			timeline.set(`.light[data-id="${i}"]`, { opacity: 1 }, "begin-lights+=" + (0.05 * i));
		}

		return timeline;
	}

	generateLights() {
		let lights = [];
		for (let i = 1; i <= 19; i++) {
			lights.push(<Light data-id={i} key={i} className="light" />);
		}
		return lights;
	}

	generateOrnaments() {
		let ornaments = [];
		for (let i = 1; i <= 13; i++) {
			ornaments.push(<Ornament data-id={i} key={i} className="ornament" />);
		}
		return ornaments;
	}

	render() {
		return (
			<XmasTree className="container">
				<Star className="star">★</Star>
				<TreeSection className="branches top" />
				<TreeSection className="branches middle" />
				<TreeSection className="branches bottom" />
				<TreeTrunk className="trunk" />
				{this.generateOrnaments()}
				{this.generateLights()}
			</XmasTree>
		);
	}

	componentDidMount() {
		this.timeline = this.buildTimeline();
		//this.timeline.pause();
	}
}

export default App;
