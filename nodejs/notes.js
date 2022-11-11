const chalk = require('chalk')
const fs = require('fs')
const path = require('path')

const notePath = path.join(__dirname, 'notes.json')

const getNotes = (callback) => {
    fs.readFile(notePath, 'utf-8', (error, content) => {
        if(error) {
            throw new Error(error.message)
        }

        try {
            callback(JSON.parse(content))
        } catch(e) {
            callback([])
        }
    })
}

const saveNotes = (content) => {
    fs.writeFile(notePath, JSON.stringify(content), (error) => {
        if(error) {
            throw new Error(error.message)
        }
    })
}

const addNote = (title, text) => {
    getNotes((notes) => {
        const dublicateNote = notes.find(note => note.title === title)

        if(dublicateNote) {
            console.log(chalk.red.inverse('Заметка с таким названием уже существует!'))
        } else {
            notes.push({title, text})
            saveNotes(notes)
            console.log(chalk.green.inverse('Заметка добавлена'))
        }
    })
}

const listNotes = () => {
    getNotes(notes => {
        if(notes.length) {
            console.log(chalk.inverse('Ваши заметки:'))
            notes.forEach(note => console.log(note.title))
        } else {
            console.log(chalk.blue('Заметок пока нет'))
        }
    })
}

const readNote = (title) => {
    getNotes(notes => {
        const note = notes.find(n => n.title === title)

        if(note) {
            console.log(chalk.inverse(note.title))
            console.log(note.text)
        } else {
            console.log(chalk.red.inverse(`Заметка с названием "${title}" не найдена`))
        }
    })
}

const removeNote = (title) => {
    getNotes(notes => {
        const updatedNotes = notes.filter(note => note.title !== title)

        if(updatedNotes.length !== notes.length) {
            saveNotes(updatedNotes)
            console.log(chalk.green(`Заметка с названием "${title}" была успешно удалена`))
        } else {
            console.log(chalk.red.inverse(`Заметка с названием "${title}" не найдена`))
        }
    })
}

module.exports = {
    addNote, listNotes, readNote, removeNote
}