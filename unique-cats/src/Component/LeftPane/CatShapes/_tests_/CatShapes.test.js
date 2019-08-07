import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import "../../../../setupTests";
import CatShapes from "../CatShapes";

var tempArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
describe("MyComponent", () => {
  it("should render my component", () => {
    const wrapper = shallow(<CatShapes catArray={tempArray} />);
  });
});

it("matches the snapshot", () => {
  const tree = renderer.create(<CatShapes catArray={tempArray} />).toJSON();
  expect(tree).toMatchSnapshot();
});

