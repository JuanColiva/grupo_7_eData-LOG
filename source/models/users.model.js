const fs = require('fs');
const {resolve} = require('path');
const index = () => JSON.parse(fs.readFileSync(resolve(__dirname,'..','data','users.json')))
const one = id => index().find(e => e.id == id)
const write = data => fs.writeFileSync(resolve(__dirname,'..','data','users.json'),JSON.stringify(data,null,2))
module.exports = {index,one,write}
