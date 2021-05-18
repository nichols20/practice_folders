

class NoteApp{
    constructor(){
        this.noteContainer = document.getElementById('noteContainer')
        this.newNote = document.getElementById('inputNote')
    }

    submitClicked(){
        console.log(this.newNote.value)
        this.newNote.value = ''
        let savedNote = document.createElement('div')
        this.noteContainer.append(savedNote)
        console.log(savedNote)
    }
}

const note = new NoteApp