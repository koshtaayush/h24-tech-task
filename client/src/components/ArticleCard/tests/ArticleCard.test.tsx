import React from 'react'
import { shallow } from 'enzyme'

import ArticleCard from '..'

describe('ArticleCard', () => {

  var article = {
    "name": "Premium Komfortmatratze Smood",
    "variantName": "180 x 200cm",
    "prices": {
      "currency": "EUR",
      "regular": {
        "value": 56999
      }
    },
    "images": [
      {
        "path": "https://cdn1.home24.net/images/media/catalog/product/200x200/png/m/a/matratzenbezug-smood-webstoff-180-x-200cm-3477221.webp"
      }
    ]
  }
    
    it('Should match the snapshot', () => {
        
        const component = shallow(
            <ArticleCard
                article={article}
                
            />
        )

        expect(component).toMatchSnapshot()
    })

    it('Should render the article name correctly', () => {

      const component = shallow(
          <ArticleCard
              article={article}
          />
      )

      expect(component.find({'test-id': 'articleName'}).text()).toEqual('Premium Komfortmatratze Smood')
  })

  it('Should render the button text correctly', () => {
    const component = shallow(
        <ArticleCard
            article={article}
        />
    )

    expect(component.find({'test-id': 'addToCartButton'}).props().buttonText).toEqual('Add to cart')
})
})
