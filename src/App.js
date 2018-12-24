import React, { Component } from "react";

import { Back, Linear, TimelineLite } from "gsap";
import styled from "styled-components";

import { Letter } from "./components/Letter";
import { Light } from "./components/Light";
import { Ornament } from "./components/Ornament";
import { Star } from "./components/Star";
import { TreeSection } from "./components/TreeSection";
import { TreeTrunk } from "./components/TreeTrunk";

import "./App.css";

const Container = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 100%;
	text-align: center;
	width: 100%;
`;

const Controls = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	width: 400px;
`;

const Details = styled.div`
	align-items: flex-end;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

const PlayButton = styled.div`
	align-items: center;
	border: 2px solid black;
	cursor: pointer;
	display: flex;
	font-size: 20px;
	font-weight: bold;
	height: 1.5em;
	justify-content: center;
	text-transform: uppercase;
	width: 100px;
`;

const Sign = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	position: absolute;
	top: 0;
	width: 100%;
`;

const XmasTree = styled.div`
	align-items: center;
	background: linear-gradient(to bottom, white 0%, white 100%);
	border: 2px solid black;
	display: inline-flex;
	flex-direction: column;
	height: 600px;
	justify-content: flex-end;
	overflow: hidden;
	perspective: 500px;
	position: relative;
	width: 400px;

	&.night {
		background: linear-gradient(to bottom, black 75%, #418191 100%);
	}
`;

class App extends Component {
	buttonText = "Play";
	timeline;

	buildTimeline() {
		let timeline = new TimelineLite({ paused: true })
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
			.set(".star", { opacity: 1 })
			.from(".star", 2, { rotationX: -90, transformOrigin: "bottom center", ease: Back.easeOut })
			.to("*", 3, { className: "+=night" }, "-=1")
			.set([".light", ".star"], { className: "+=on" }, "+=1")
			.staggerFrom(".letter", 1, { y: -50, rotationX: -90, transformOrigin: "top center", ease: Back.easeOut }, 0.1, "+=0.5");

		for (let i = 1; i <= 19; i++) {
			timeline.set(`.light[data-id="${i}"]`, { opacity: 1 }, "begin-lights+=" + (0.05 * i));
		}

		return timeline;
	}

	generateLetters() {
		return Array.from("MERRYCHRISTMAS").map(letter => <Letter data-letter={letter} className="letter">{letter}</Letter>);
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

	playAnimation() {
		this.timeline.progress(0);
		this.timeline.play();
	}

	render() {
		return (
			<Container>
				<XmasTree className="container">
					<Sign>{this.generateLetters()}</Sign>
					<Star className="star">★</Star>
					<TreeSection className="branches top" />
					<TreeSection className="branches middle" />
					<TreeSection className="branches bottom" />
					<TreeTrunk className="trunk" />
					{this.generateOrnaments()}
					{this.generateLights()}
				</XmasTree>
				<Controls>
					<PlayButton onClick={() => this.playAnimation()}>{this.buttonText}</PlayButton>
					<Details>
						<div className="author">👨‍💻 by Philip Fulgham</div>
						<div className="source-link">
							<a href="https://github.com/philipf5/xmas-animation-2018">View Source on GitHub</a>
						</div>
					</Details>
				</Controls>
			</Container>
		);
	}

	componentDidMount() {
		this.timeline = this.buildTimeline();
	}
}

export default App;
