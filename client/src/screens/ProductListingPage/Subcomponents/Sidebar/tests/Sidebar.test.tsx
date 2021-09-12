import React from 'react'
import { shallow } from 'enzyme'

import Sidebar from './../index'

describe('Sidebar', () => {
    it('Should match the snapshot', () => {
        const categories = [
            {
              "name": "Möbel",
              "articleCount": 68789,
              "childrenCategories": [
                {
                  "name": "Wohnzimmer",
                  "urlPath": "kategorie/wohnzimmermoebel/"
                },
                {
                  "name": "Schlafzimmer",
                  "urlPath": "kategorie/schlafzimmermoebel/"
                },
                {
                  "name": "Esszimmer",
                  "urlPath": "kategorie/esszimmermoebel/"
                },
                {
                  "name": "Büro",
                  "urlPath": "kategorie/bueromoebel/"
                },
                {
                  "name": "Badmöbel",
                  "urlPath": "kategorie/badezimmermoebel/"
                },
                {
                  "name": "Flurmöbel & Dielenmöbel",
                  "urlPath": "kategorie/flur-und-diele/"
                },
                {
                  "name": "Küche & Bar",
                  "urlPath": "kategorie/kuechenmoebel/"
                },
                {
                  "name": "Kinderzimmer",
                  "urlPath": "kategorie/kinderzimmermoebel/"
                }
              ],
              "categoryArticles": {
                "articles": [
                  {
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
                  },
                  {
                    "name": "Boxspringbett Kinx",
                    "variantName": "Stoff KINX: Grau - 180 x 200cm - 130 cm",
                    "prices": {
                      "currency": "EUR",
                      "regular": {
                        "value": 164999
                      }
                    },
                    "images": [
                      {
                        "path": "https://cdn1.home24.net/images/media/catalog/product/200x200/png/-/1/-1000062031-210726-10044100341-IMAGE-P000000001000062031.webp"
                      }
                    ]
                  }
                ]
              },
              "extensions": {
                "lexicon": {
                  "Mu": {},
                  "Words": {}
                }
              }
            }
          ]

        const component = shallow(<Sidebar categories={categories} />)

        expect(component).toMatchSnapshot()
    })
})
