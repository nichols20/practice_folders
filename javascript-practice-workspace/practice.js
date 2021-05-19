

class NoteApp{
    constructor(){
        this.noteContainer = document.getElementById('noteContainer')
        this.newNote = document.getElementById('inputNote')
    }

    submitClicked(){
        let noteHeader = document.createElement('h4')
        noteHeader.textContent ='New Note'

        let deleteNote = document.createElement('button')
        deleteNote.textContent = 'x'
        deleteNote.id = 'deleteNote'
        deleteNote.onclick = function(){
            savedNote.remove()
        }
        

        let noteDetails = document.createElement('p')
        noteDetails.textContent = this.newNote.value

        let viewDetails = document.createElement('button')
        viewDetails.textContent = 'View Details'
        viewDetails.id = 'viewDetails'
        viewDetails.onclick = function(){
            console.log('click')
        }

        let savedNote = document.createElement('div')
        savedNote.id = 'savedNote'
        savedNote.append(noteHeader, deleteNote, noteDetails, viewDetails)


        this.noteContainer.append(savedNote)
        this.newNote.value = ''
    }

}

const note = new NoteApp