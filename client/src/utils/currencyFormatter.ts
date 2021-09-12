import { INTERNATIONAL_NUMBER_FORMAT_VALUES } from './../constants/internationalFormatValues'

export var currencyFormatter = new Intl.NumberFormat(INTERNATIONAL_NUMBER_FORMAT_VALUES[0], {
    style: INTERNATIONAL_NUMBER_FORMAT_VALUES[1],
    currency: INTERNATIONAL_NUMBER_FORMAT_VALUES[2],
})