import React from 'react'
import { shallow, mount } from 'enzyme'
import TodoItem from './TodoItem'

describe('TodoItem', () => {

    let wrapper
    let wrapperMount

    beforeEach(() => wrapper = shallow(<TodoItem />))

    beforeEach(() => wrapperMount = mount(<TodoItem />))
    
});