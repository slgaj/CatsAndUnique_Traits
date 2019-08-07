import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import '../../../../setupTests';
import CatsGrid from '../CatsGrid';

var tempArray= ["1","2","3","4","5","6","7","8","9","10","11","12"];
var catGridArray=["1","2","3","4","5","6","7","8","9","10","11","12"]
describe("MyComponent", () => {
  it("should render my component", () => {
    const wrapper = shallow(<CatsGrid sizeOfCat={tempArray} arraySq={catGridArray} />);
    expect(wrapper).toMatchSnapshot();
  });
});

it('matches the snapshot', () => {
    const tree = renderer.create(<CatsGrid sizeOfCat={tempArray} arraySq={catGridArray} />).toJSON();
    expect(tree).toMatchSnapshot();
});