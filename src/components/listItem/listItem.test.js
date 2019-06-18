import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../Utils/index";
import ListItem from "./index";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        title: "Example Title",
        desc: "Some text"
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("Component renders", () => {
    let component;
    beforeEach(() => {
      const props = {
        title: "Example Title",
        desc: "Some text"
      };
      component = shallow(<ListItem {...props} />);
    });
    it("Should render without error", () => {
      const listItem = findByTestAttr(component, "ItemComponent");
      expect(listItem.length).toBe(1);
    });
    it("Should render the title", () => {
      const title = findByTestAttr(component, "title");
      expect(title.length).toBe(1);
    });
    it("Should render the description", () => {
      const desc = findByTestAttr(component, "desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Should NOT render", () => {
    let component;
    beforeEach(() => {
      const props = {
        desc: "Some text"
      };
      component = shallow(<ListItem {...props} />);
    });
    it("Component is NOT rendered", () => {
      const item = findByTestAttr(component, "ItemComponent");
      expect(item.length).toBe(0);
    });
  });
});
