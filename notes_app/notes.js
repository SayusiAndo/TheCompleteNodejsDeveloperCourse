const fs = require('fs')

class Note {
    title;
    body;
}

const dataFileName = 'data.json';

const add = function add(title, body) {
    const data = loadData();
    const duplicates = data.filter((elem) => {
        if (elem.title === title) {
            return true;
        }
    })

    if (duplicates.length === 0) {
        const newNote = new Note();
        newNote.title = title;
        newNote.body = body;
        data.push(newNote);
        writeData(data);
        console.log('A note with title: ' + title + ' is added.')
    } else {
        console.log('A note with title: ' + title + ' already exists.')
    }
}

const remove = function remove(title) {
    const data = loadData();
    if (data.length !== 0) {
        const result = data.filter(item => item.title !== title
        );
        console.log(result)
        writeData(result);
        console.log('Note with title: ' + title + ' has been removed!');
    }
}

const writeData = function (data) {
    const dataJSON = JSON.stringify(data);
    fs.writeFileSync(dataFileName, dataJSON);
}

const loadData = function () {
    try {
        const buffer = fs.readFileSync(dataFileName);
        const dataJSON = buffer.toString();
        const data = JSON.parse(dataJSON);
        return data;
    } catch (e) {
        return [];
    }
}

module.exports = {
    add: add,
    remove: remove
}
