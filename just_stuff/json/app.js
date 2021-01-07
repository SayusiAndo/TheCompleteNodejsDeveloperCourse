const fs = require('fs')

const dataBuffer = fs.readFileSync('./data.json');
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON);

data.name = "Bela"
data.age = 34

const dataModifiedJSON = JSON.stringify(data);
fs.writeFileSync('./data-modified.json', dataModifiedJSON);
