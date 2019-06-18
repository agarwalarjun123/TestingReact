import React from "react";
import { findByTestAttr, checkProps } from "../../../Utils/index";
import SharedButton from "./index";
import { shallow } from "enzyme";

describe("SharedButton Component", () => {
  describe("Checking PropTypes", () => {
    it("Should NOT throw a warning", () => {
      const expectedProps = {
        buttonText: "Example Button Text",
        emitEvent: () => {}
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("Renders", () => {
    let component;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "Example Button Text",
        emitEvent: mockFunc
      };
      component = shallow(<SharedButton {...props} />);
    });
    it("Should render the button", () => {
      const button = findByTestAttr(component, "ButtonComponent");
      expect(button.length).toBe(1);
    });
    //Simulate events here we are testing if the button is clicked once then the
    //emitEvent function is called once only
    it("Should emit callback on click event", () => {
      const button = findByTestAttr(component, "ButtonComponent");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
