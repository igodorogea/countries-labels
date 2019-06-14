const fs = require('fs')
const countriesV2 = require('./countriesV2.json')
const blacklist = Object.keys(require('./blacklist.json'))

const selectedCountries = countriesV2
  .filter(c => !blacklist.includes(c.alpha2Code))
  .map(({ alpha2Code, callingCodes, name, translations }) => ({ name, callingCodes, alpha2Code, translations: { de: translations.de } }))
fs.writeFileSync('../countries.json', JSON.stringify(selectedCountries, null, 2))
