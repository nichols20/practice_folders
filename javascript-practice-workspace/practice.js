

class NoteApp{
    constructor(){
        this.noteContainer = document.getElementById('noteContainer')
        this.newNote = document.getElementById('inputNote')
        this.noteHeader = document.createElement('h4')
        this.noteHeader.textContent ='New Note'
    }

    submitClicked(){
        let savedNote = document.createElement('div')
        savedNote.append(this.noteHeader)


        this.noteContainer.append(savedNote)
        this.newNote.value = ''
        console.log(savedNote)
    }
}

const note = new NoteApp