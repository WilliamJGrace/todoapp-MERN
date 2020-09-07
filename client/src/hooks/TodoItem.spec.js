import React from 'react'
import { shallow, mount } from 'enzyme'
import TodoItem from './TodoItem'

describe('TodoItem', () => {

    let wrapper
    let wrapperMount

    const baseProps = {
        todoItem: {
            isCompleted: false,
            name: 'test'
        },
        editTodoItem: jest.fn()
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

    it('call edittoitem when user fills in edit form and hits submit', () => {
        wrapperMount
        .find('#editbutton')
        .simulate("click")
        wrapperMount
        .find("#edittodo")
        .simulate('change', { target: { value: 'Test' } })
        wrapperMount
        .find("#editform")
        .simulate('submit')
        expect(baseProps.editTodoItem).toHaveBeenCalledTimes(1)
    });
    
});