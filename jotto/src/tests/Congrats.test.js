import React from "react";
import { findByTestAttr, checkProps } from "./testUtils";
import Congrats from "../components/Congrats";
import { shallow } from "enzyme";

const defaultProps = { success: false };
/**
 * FACTORY FUNCTION TO CREATE A SHALLOW WRAPPER FOR THE APP COMPONENT
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 *
 */
const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<Congrats {...setupProps} />);
};

it("renders without error", () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, "component-congrats");
	expect(component.length).toBe(1);
});

it("renders no text when `success` prop is false", () => {
	const wrapper = setup({ success: false });
	const component = findByTestAttr(wrapper, "component-congrats");
	expect(component.text()).toBe("");
});

it("renders non-empty congrats message when success message is displayed", () => {
	const wrapper = setup({ success: true });
	const message = findByTestAttr(wrapper, "congrats-message");
	expect(message.text().length).not.toBe(0);
});

it("Does not throw warning with expected props", () => {
	const expectedProps = { success: false };
	checkProps(Congrats, expectedProps);
});
