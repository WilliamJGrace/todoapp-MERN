import React from 'react'
import { shallow, mount } from 'enzyme'
import TodoList from './TodoList'
import { ExpansionPanelActions } from '@material-ui/core';


describe('TodoList', () => {

    let wrapper
    let wrapperMount


    beforeEach(() => wrapper = shallow(<TodoList/>)
    )

    it('should render 3 divs with no props', () => {
        expect(wrapper.find('div').length).toEqual(3)
        
    });
    
});


