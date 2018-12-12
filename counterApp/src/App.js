import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	state = {
		counter: 0,
		error: false
	};

	render() {
		return (
			<div data-test="component-app">
				<h1 data-test="counter-display">{this.state.counter}</h1>
				{this.state.error && (
					<h1 style={{ color: "red" }}>you can not go below 0</h1>
				)}
				<button
					onClick={() => {
						this.setState(prev => {
							return { counter: prev.counter + 1, error: false };
						});
					}}
					data-test="increment-button"
				>
					Increment Counter
				</button>
				<button
					onClick={() => {
						const { counter } = this.state;
						if (counter === 0) {
							this.setState({ error: true });
						} else {
							this.setState(prev => ({
								counter: prev.counter - 1,
								error: false
							}));
						}
					}}
					data-test="decrement-button"
				>
					decrement counter
				</button>
			</div>
		);
	}
}

export default App;
