const yargs = require('yargs/yargs')(process.argv.slice(2));
const noteManager = require('./notes')

// noinspection BadExpressionStatementJS
yargs
    .command({
        command: 'add',
        desc: 'Adds a new note',
        builder: {
            title: {
                describe: 'Title of the new note',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Body of the new note',
                demandOption: false,
                type: 'string'
            }
        },
        handler: (argv) => {
            noteManager.add(argv.title, argv.body);
        }
    })
    .command({
        command: 'remove',
        desc: 'Removes the provided note by title',
        builder: {
            title: {
                describe: 'Title of the note going to be removed',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            noteManager.remove(argv.title);
        }
    })
    .demandCommand()
    .help()
    .wrap(72)
    .argv;
