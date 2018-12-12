import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";
import { findByTestAttr } from "./tests/testUtils";
Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
	return shallow(<App {...props} />);
};

it("renders without crashing", () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, "component-app");
	expect(component.length).toBe(1);
});
