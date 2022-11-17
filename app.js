const chalk = require("chalk")
const yargs = require('yargs')
const notes = require('./notes.js')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Description',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv) => {
        // console.log('Title'+ ' : ' + argv.title);
        // console.log('Description'+' : '+argv.body);
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv) => {
        // console.log('Remove a note!');
        notes.deleteNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    builder:{

    },
    handler: () => {
        // console.log('Listing all notes!');
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command:'read',
    describe:'Reading a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv)=>{
        notes.readNote(argv.title)
        // console.log('Reading all notes!');

    }
})


yargs.parse()
// console.log(yargs.argv);

