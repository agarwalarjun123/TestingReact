import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { findByTestAttr, checkProps } from "../../../Utils/index";

const setUp = props => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test header",
        desc: "Test desc",
        tempArr: [
          {
            fname: "Test fname",
            lname: "Test lname",
            email: "test@gmail.com",
            age: 20,
            onlineStatus: true
          }
        ]
      };
      const propsError = checkProps(Headline, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("Have props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc"
      };
      component = setUp(props);
    });
    it("Should render without errors", () => {
      const wrapper = findByTestAttr(component, "HeadlineComponent");
      expect(wrapper.length).toBe(1);
    });
    it("Should render a h1", () => {
      const h1 = findByTestAttr(component, "header");
      expect(h1.length).toBe(1);
    });
    it("Should render a description", () => {
      const desc = findByTestAttr(component, "header");
      expect(desc.length).toBe(1);
    });
  });
  describe("Have no props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    it("Should not render", () => {
      const wrapper = findByTestAttr(component, "HeadlineComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
