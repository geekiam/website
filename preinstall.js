require('dotenv').config()
const fs = require('fs')
const pack = require('./package.json')

pack.dependencies.mdbvue = pack.dependencies.mdbvue
    .replace('{MDB_VUE_PRO_ID}', process.env.MDB_VUE_PRO_ID)

fs.writeFileSync('package.json', JSON.stringify(pack, null, 4))
