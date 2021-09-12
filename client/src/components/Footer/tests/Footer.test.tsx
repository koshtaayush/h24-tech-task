import React from 'react'
import { shallow } from 'enzyme'

import Footer from '..'

describe('Footer', () => {
    it('Should match the snapshot', () => {

        const component = shallow(
            <Footer />
        )

        expect(component).toMatchSnapshot()
    })
})
