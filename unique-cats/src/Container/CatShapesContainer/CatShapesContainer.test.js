import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import "../../setupTests";
import CatShapesContainer from './CatShapesContainer';
import Button from '../../Component/Button/Button';

const fnClick = jest.fn();

describe('component', () => {
    it('Proper message rendereing', () => {
    const wrapper = shallow(<CatShapesContainer />);
    const text = wrapper.find('span').text();
    expect(text).toBe('Please note, after last cell of Cat Grid is filled up, then Cat-room is locked. You can unlock it by reset-button');
    });

    it('ImProper message rendereing', () => {
        const wrapper = shallow(<CatShapesContainer />);
        const text = wrapper.find('span').text();
        expect(text).not.toBe('ou can unlock it by reset-button');
    });
});



it('matches the snapshot', () => {
    const tree = renderer.create(<CatShapesContainer/>).toJSON();
    expect(tree).toMatchSnapshot();
});

describe('click events', () => {
    it('button click should add Cat to Grid', () => {
        //replace actual function with mock function
        const component = shallow(<Button class={"reset-btn"} onClick={fnClick} />);
        
        //simulate a click
        component
        .find('div.reset-btn')
        .simulate('click');
        
        //check if function was called
        expect(fnClick).toHaveBeenCalled();
    });


});