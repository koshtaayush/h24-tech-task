import React from 'react'
import { shallow } from 'enzyme'

import Header from '..'

describe('Header', () => {
    it('Should match the snapshot', () => {

        const component = shallow(
            <Header />
        )

        expect(component).toMatchSnapshot()
    })
    
    it('Should always show search box', () => {

        const component = shallow(
            <Header />
        )

        expect(component.find({'test-id': 'searchComponent'})).toHaveLength(1)
    })
    
})
