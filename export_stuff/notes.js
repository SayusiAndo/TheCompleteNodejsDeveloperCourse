const fs = require('fs');

const getNotes = function () {
    const notes = fs.readFileSync('./notes.txt');
    return notes;
}

module.exports = getNotes;
