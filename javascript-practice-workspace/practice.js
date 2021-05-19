
class NoteApp{
    constructor(){
        this.noteContainer = document.getElementById('noteContainer')
        this.newNote = document.getElementById('inputNote')
        this.modal = document.getElementById('modal')
    }

    submitClicked(){
        let modal = document.getElementById('modal')

        let noteHeader = document.createElement('h4')
        noteHeader.textContent ='New Note'

        let deleteNote = document.createElement('button')
        deleteNote.textContent = 'x'
        deleteNote.id = 'deleteNote'
        deleteNote.onclick = function(){
            savedNote.remove()
        }

        let viewDetails = document.createElement('button')
        viewDetails.textContent = 'View Details'
        viewDetails.id = 'viewDetails'
        /*working progress */
        viewDetails.onclick = function(){
            modal.style.display = 'block'
            let noteheader2 = noteHeader
            let deleteNote2 = deleteNote
    
            let scopedNote = document.createElement('div')
            scopedNote.id = 'scopedNote'
            scopedNote.append(noteheader2, deleteNote2, noteDetails2)
            modal.append(scopedNote)
            
        }
        /*///////////////////////////////////////////////////////////////////////*/
        let noteDetails = document.createElement('p')
        noteDetails.textContent = this.newNote.value

        let savedNote = document.createElement('div')
        savedNote.id = 'savedNote'
        savedNote.append(noteHeader, deleteNote, noteDetails, viewDetails)

        this.noteContainer.append(savedNote)
        this.newNote.value = ''
    }

}

const note = new NoteApp