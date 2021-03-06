const fs = require('fs')
const chalk = require('chalk')

class Note {
    title;
    body;
}

const dataFileName = 'data.json';

const add = (title, body) => {
    const data = loadData();
    const duplicate = data.find((elem) => elem.title === title);

    if (!duplicate) {
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

const list = () => {
    const data = loadData();
    console.log(chalk.yellow.inverse('=== Notes ==='))
    console.log(chalk.yellow(' Amount: ' + data.length))

    if (data.length > 0) {
        let counter = 0;
        data.forEach((note) => {
            console.log(
                chalk.blue('| ' + counter + ' | ') +
                chalk.green(note.title) + ' |'
            )
            counter++
        })
    }
}

const read = (title) => {
    const data = loadData();
    const note = data.find((note) => note.title === title)
    if (note) {
        if (note.body) {
            console.log(chalk.grey('|========================|'))
            console.log(chalk.grey('|') + note.title + chalk.grey(' |'))
            console.log(chalk.grey('|-------------------------|'))
            console.log(chalk.grey('| ') + note.body + chalk.grey(' |'))
            console.log(chalk.grey('|========================|'))
        } else {
            console.log(chalk.grey('|========================|'))
            console.log(chalk.grey('|') + note.title + chalk.grey(' |'))
            console.log(chalk.grey('|-------------------------|'))
            console.log(chalk.grey('| ') + chalk.red.inverse('No body!') + chalk.grey(' |'))
            console.log(chalk.grey('|========================|'))
        }
    } else {
        console.log(chalk.red.inverse('There is no note with title: ' + title))
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
    remove: remove,
    list: list,
    read: read
}
