const fs = require('fs');

fs.writeFileSync('notest.txt', 'Some text goes into this file.');
fs.appendFileSync('notest.txt', 'this part of the text was appended.');
