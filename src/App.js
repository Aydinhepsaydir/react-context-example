/*
 *
 * Teeny tiny app to show importance of React Context API
 *
 */

import React from "react";
import "./App.css";

import { withState } from "./context";

const Green = ({ context }) => {
	const { number, setNumber } = context;
	return (
		<div className="green">
			<button onClick={() => setNumber(number + 1)}>Increment</button>
			<div className="text">{number}</div>
		</div>
	);
};
// wrap Green component
const WrappedGreen = withState(Green);

const Blue = () => {
	return (
		<div className="blue">
			<WrappedGreen />
		</div>
	);
};

const App = ({ context }) => {
	const { number } = context;
	return (
		<div className="red">
			<div className="text">{number}</div>
			<Blue />
		</div>
	);
};

export default withState(App);
