import React from 'react'
import { shallow } from 'enzyme'

import AutoSuggest from './../AutoSuggest'

describe('AutoSuggest', () => {
    it('Should match the snapshot', () => {
        const articleList = [
            {
                name: 'Premium Komfortmatratze Smood',
                variantName: '180 x 200cm',
                prices: {
                    currency: 'EUR',
                    regular: {
                        value: 56999,
                    },
                },
                images: [
                    {
                        path:
                            'https://cdn1.home24.net/images/media/catalog/product/200x200/png/m/a/matratzenbezug-smood-webstoff-180-x-200cm-3477221.webp',
                    },
                ],
            },
            {
                name: 'Premium Komfortmatratze Smood',
                variantName: '180 x 200cm',
                prices: {
                    currency: 'EUR',
                    regular: {
                        value: 56999,
                    },
                },
                images: [
                    {
                        path:
                            'https://cdn1.home24.net/images/media/catalog/product/200x200/png/m/a/matratzenbezug-smood-webstoff-180-x-200cm-3477221.webp',
                    },
                ],
            },
        ]

        const component = shallow(<AutoSuggest articleList={articleList} />)

        expect(component).toMatchSnapshot()
    })
})
