import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "./testUtils";
import GuessWords from "../components/GuessedWords";

const defaultProps = {
	guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};
const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<GuessWords {...setupProps} />);
};

it("test does not throw warning with expected props", () => {
	checkProps(GuessWords, defaultProps);
});

describe("if there are no words guessed", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({ guessedWords: [] });
	});

	it("renders without error", () => {
		const component = findByTestAttr(wrapper, "component-guessed-words");
		expect(component.length).toBe(1);
	});
	it("renders without error", () => {
		const instructions = findByTestAttr(wrapper, "guess-instructions");
		expect(instructions.text().length).not.toBe(0);
	});
});

describe("if there are words guessed", () => {
	let guessedWords = [
		{ guessedWord: "train", letterMatchCount: 3 },
		{ guessedWord: "agile", letterMatchCount: 1 },
		{ guessedWord: "party", letterMatchCount: 5 }
	];
	let wrapper;
	beforeEach(() => {
		wrapper = setup({ guessedWords });
	});
	it("renders without error", () => {
		const component = findByTestAttr(wrapper, "component-guessed-words");
		expect(component.length).toBe(1);
	});
	it("renders guessed word section", () => {
		const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");
		expect(guessedWordsNode.length).toBe(1);
	});
	it("displays correct number of guessed words", () => {
		const guessedWordsNodes = findByTestAttr(wrapper, "guessed-word");
		expect(guessedWordsNodes.length).toBe(guessedWords.length);
	});
});
