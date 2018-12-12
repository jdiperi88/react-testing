import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { findByTestAttr } from "./tests/testUtils";

const setup = (props = {}) => {
	return shallow(<App {...props} />);
};

it("renders without crashing", () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, "component-app");
	expect(component.length).toBe(1);
});
