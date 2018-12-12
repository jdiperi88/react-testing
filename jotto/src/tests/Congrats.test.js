import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "./testUtils";
import Congrats from "../components/Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * FACTORY FUNCTION TO CREATE A SHALLOW WRAPPER FOR THE APP COMPONENT
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = {}) => {
	return shallow(<Congrats {...props} />);
};

it("renders without error", () => {});

it("renders no text when `success` prop is false", () => {});

it("renders non-empty congrats message when success message is displayed", () => {});
