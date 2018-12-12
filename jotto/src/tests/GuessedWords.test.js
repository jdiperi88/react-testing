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