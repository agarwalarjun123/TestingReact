import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "../Utils/index";
import App from "./App";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive(); //This is how you dive in the child componets and test connected components
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example title 1",
          body: "Test body"
        },
        {
          title: "Example title 2",
          body: "Test body"
        }
      ]
    };
    wrapper = setUp(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAttr(wrapper, "AppComponent");
    expect(component.length).toBe(1);
  });
  //Method testing
  it("exampleMethod_updatesState Method should update state as expected", () => {
    const classInstance = wrapper.instance();
    classInstance.exampleMethod_updatesState();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });
});
