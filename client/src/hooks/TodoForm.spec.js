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


    it('should set the value when form filled in', () => {
        let inputElement = wrapperMount.find('[data-test="inputElement"]')
        inputElement.simulate('change', { target: { value: 'Test' } })
        inputElement = wrapperMount.find('[data-test="inputElement"]');
        expect(inputElement.prop('value')).toEqual('Test')
    })

    it('should call add to item when form submitted', () => {
        let inputElement = wrapperMount.find('#nametodo')
        inputElement.simulate('change', { target: { value: 'Test' } })
        inputElement = wrapperMount.find('form')
        inputElement.simulate('submit')
        expect(baseProps.addTodoItem).toHaveBeenCalledTimes(1)
    });
    
});