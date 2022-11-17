const chalk = require('chalk')
const fs = require('fs')


const getNotes = () => {
    return 'Your notes...'
}

// Creating a new note and saving it to JSON file

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => {
        return note.title ===title
    })



    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        // console.log(notes);
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'));
    }else{
        console.log(chalk.red.inverse('Note title taken'));
    }

    
}


// Removing an existing note present in JSON file

const deleteNote = (title, body) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => {
        return note.title !==title
    })

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No note found'));
    }  
}

// Listing all the notes

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'));
    notes.forEach((note) => {
        console.log(note.title)
    })
}


// Reading all the notes

const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note)=>
        note.title===title
    )

    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    }else{
        console.log(chalk.red.inverse('Note not found'));
    }

}



const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    deleteNote:deleteNote,
    listNotes:listNotes,
    readNote:readNote
}