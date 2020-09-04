import React from 'react'
import { shallow } from 'enzyme'
import TodoForm from './TodoForm'



describe('TodoForm', () => {
    let wrapper

    beforeEach(() =>  wrapper = shallow(<TodoForm/>)
       
    )

    it('Should render a form', () => {
        expect(wrapper.find('form').length).toEqual(1)
        
    });
    
});