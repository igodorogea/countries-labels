const fs = require('fs')
const blacklist = require('./blacklist.json')

const orderedList = Object.keys(blacklist).sort().reduce((acc, key) => ({ ...acc, [key]: blacklist[key] }), {})

fs.writeFileSync('./blacklist.json', JSON.stringify(orderedList, null, 2))
