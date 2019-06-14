const fs = require('fs')

// Part 1 - extract labels
// const countriesV2 = require('./countriesV2.json')
// const labels = countriesV2.reduce((acc, c) => {
//   acc[c.alpha2Code] = { en: c.name, de: c.translations.de }
//   return acc
// }, {})
// fs.writeFileSync('./labelsV2.json', JSON.stringify(labels, null, 2))

// Part 2 - make 2 files for EN and DE only with countries from server
const labelsV2 = require('./labelsV2.json')
const countriesServer = require('./countries-server.json')
const [labelsEn, labelsDe] = countriesServer
  .sort((a, b) => a.code.localeCompare(b.code, 'en', { sensitivity: 'base' }))
  .reduce(([accEn, accDe], c) => {
  accEn[c.code] = labelsV2[c.code].en
  accDe[c.code] = labelsV2[c.code].de
  return [accEn, accDe]
}, [{}, {}])
fs.writeFileSync('./labels-en.json', JSON.stringify(labelsEn, null, 2))
fs.writeFileSync('./labels-de.json', JSON.stringify(labelsDe, null, 2))
