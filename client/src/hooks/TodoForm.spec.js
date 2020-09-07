import React from 'react'
import { shallow, mount } from 'enzyme'
import TodoForm from './TodoForm'



describe('TodoForm', () => {
    let wrapper
    let wrapperMount

    // const setValue = jest.fn();
    // const useValueSpy = jest.spyOn(React, 'useValue')
    // useValueSpy.mockImplementation((init) => [init, setState])

    const baseProps = {
        addTodoItem: jest.fn()
    }

    beforeEach(() =>  wrapper = shallow(<TodoForm
       {...baseProps}
    />)
    


    )

    beforeEach(() => wrapperMount = mount(<TodoForm
    {...baseProps}
    
    />))

    it('Should render a form', () => {
        expect(wrapper.find('form').length).toEqual(1)
        
    });

    // Cannot test the below as unable to access state when using hooks

    // it('should set the value when form filled in', () => {
    //     wrapperMount
    //     .find('#nametodo')
    //     .simulate('change', { target: { value: 'Test' } })
    //     expect(wrapper.value).toEqual('Test')
    // })

    it('should call add to item when form submitted', () => {
        wrapperMount
        .find('#nametodo')
        .simulate('change', { target: { value: 'Test' } })
        wrapperMount
        .find('form')
        .simulate('submit')
        expect(baseProps.addTodoItem).toHaveBeenCalledTimes(1)
        
    });
    
});