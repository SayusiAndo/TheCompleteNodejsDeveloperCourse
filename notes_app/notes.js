const fs = require('fs')
const chalk = require('chalk')

class Note {
    title;
    body;
}

const dataFileName = 'data.json';

const add = (title, body) => {
    const data = loadData();
    const duplicates = data.filter(elem => elem.title === title)

    if (duplicates.length === 0) {
        const newNote = new Note();
        newNote.title = title;
        newNote.body = body;
        data.push(newNote);
        writeData(data);
        console.log(
            chalk.green('A note with title: ') +
            chalk.bgGray.green(title) +
            chalk.green(' is added.'));
    } else {
        console.log(
            chalk.red('A note with title: ') +
            chalk.bgGrey.redBright(title) +
            chalk.red(' already exists and this one is not added.'));
    }
}

const remove = (title) => {
    const data = loadData();
    if (data.length !== 0) {
        const result = data.filter((item) => item.title !== title);
        if (data.length > result.length) {
            writeData(result);
            console.log(
                chalk.green('Note with title: ') +
                chalk.bgGrey.green(title) +
                chalk.green(' has been removed!'));
        } else {
            console.log(
                chalk.yellow('No item removed.')
            );
        }
    }
}

const writeData = (data) => {
    const dataJSON = JSON.stringify(data);
    fs.writeFileSync(dataFileName, dataJSON);
}

const loadData = () => {
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
