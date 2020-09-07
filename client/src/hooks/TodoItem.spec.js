import React from 'react'
import { shallow, mount } from 'enzyme'
import TodoItem from './TodoItem'

describe('TodoItem', () => {

    let wrapper
    let wrapperMount

    const baseProps = {
        todoItem: {isCompleted: false}
    }

    beforeEach(() => wrapper = shallow(<TodoItem 
    {...baseProps}
    />))

    beforeEach(() => wrapperMount = mount(<TodoItem 
    {...baseProps}
    />))

    it('renders a single div default', () => {
        expect(wrapper.find('div').length).toEqual(4)

    });
    
});