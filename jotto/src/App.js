import React, { Component } from "react";
import "./App.css";
import GuessedWords from "./components/GuessedWords";
import Congrats from "./components/Congrats";

class App extends Component {
	render() {
		return (
			<div className="container" data-test="component-app">
				<Congrats success={false} />
				<GuessedWords
					guessedWords={[
						{ guessedWord: "train", letterMatchCount: 3 },
						{ guessedWord: "agile", letterMatchCount: 1 },
						{ guessedWord: "party", letterMatchCount: 5 }
					]}
				/>
			</div>
		);
	}
}

export default App;
