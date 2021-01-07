const yargs = require('yargs/yargs')(process.argv.slice(2));

// noinspection BadExpressionStatementJS
yargs
    .command({
        command: 'add',
        aliases: ['-a', '--add'],
        desc: 'Adds a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            console.log('Note title: ', argv.title)
            console.log('Note body: ', argv.body)
        }
    })
    .command({
        command: 'remove',
        aliases: ['-r', '--remove'],
        desc: 'removes an item',
        builder: (yargs) => yargs.default('value', 'true'),
        handler: (argv) => {
            console.log('Removing and item function is executed')
        }
    })
    .command({
        command: 'list',
        aliases: ['-l', '--list'],
        desc: 'Lists notes',
        builder: (yargs) => yargs.default('value', 'true'),
        handler: (argv) => {
            console.log('List function is executed')
        }
    })
    .command({
        command: 'read',
        aliases: ['-r', '--read'],
        desc: 'Reads and item',
        builder: (yargs) => yargs.default('value', 'true'),
        handler: (argv) => {
            console.log('Read an item function is executed')
        }
    })
    .demandCommand()
    .help()
    .wrap(72)
    .argv;
