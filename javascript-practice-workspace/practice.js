
class NoteApp{
    constructor(){
        this.noteContainer = document.getElementById('noteContainer')
        this.newNote = document.getElementById('inputNote')

    }

    submitClicked(){
        let modal = document.getElementById('modal')

        let noteHeader = document.createElement('h4')
        noteHeader.textContent ='New Note'
        let noteHeader2 = document.createElement('h4')
        noteHeader2.textContent = 'New Note'

        let deleteNote = document.createElement('button')
        deleteNote.textContent = 'x'
        deleteNote.id = 'deleteNote'
        deleteNote.onclick = function(){
            savedNote.remove()
            scopedNote.remove()
        }
        let deleteNote2 = document.createElement('button')
        deleteNote2.textContent = 'x'
        deleteNote2.id = 'deleteNote2'
        deleteNote2.onclick = function(){
            modal.style.display = 'none'
            modal.removeChild(scopedNote)
        }

        let noteDetails = document.createElement('p')
        noteDetails.textContent = this.newNote.value
        let noteDetails2 = document.createElement('p')
        noteDetails2.textContent = this.newNote.value
        

        let scopedNote = document.createElement('div')
        scopedNote.id = 'scopedNote'
        scopedNote.append(noteHeader2, deleteNote2, noteDetails2)

        let viewDetails = document.createElement('button')
        viewDetails.textContent = 'View Details'
        viewDetails.id = 'viewDetails'
        /*working progress */
        viewDetails.onclick = function(){
            modal.style.display = 'flex' 
    
            modal.append(scopedNote)
            
        }
        /*///////////////////////////////////////////////////////////////////////*/

        let savedNote = document.createElement('div')
        savedNote.id = 'savedNote'
        savedNote.append(noteHeader, deleteNote, noteDetails, viewDetails)

        this.noteContainer.append(savedNote)
        this.newNote.value = ''
    }

}

const note = new NoteApp