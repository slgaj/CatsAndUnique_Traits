import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Button from './Button';

import '../../setupTests';

const fnClick = jest.fn();
describe("MyComponent", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Button />);
  });
});

it('matches the snapshot', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('click events', () => {
    it('button click should add Cat to Grid', () => {
        //replace actual function with mock function
        const component = shallow(<Button class={"catHome"} onClick={fnClick} />);
        
        //simulate a click
        component
        .find('div.catHome')
        .simulate('click');
        
        //check if function was called
        expect(fnClick).toHaveBeenCalled();
    });
    });


