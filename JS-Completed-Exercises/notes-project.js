
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
        
        viewDetails.onclick = function(){
            modal.style.display = 'flex' 
            modal.append(scopedNote)
            
        }

        let savedNote = document.createElement('div')
        savedNote.id = 'savedNote'
        savedNote.append(noteHeader, deleteNote, noteDetails, viewDetails)

        this.noteContainer.append(savedNote)
        this.newNote.value = ''
    }

}

const note = new NoteApp

/* HTML CODE

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="#" />
    <link rel="stylesheet" href="./styles.css" />
    <title>Document</title>
  </head>
  <body>
    <div id="noteContainer">
      <h1 id="noteHeading">Write Notes Here</h1>
      <input type="text" name="note" id="inputNote" />
      <button id="submitNote" onclick="note.submitClicked()">Submit</button>
    </div>
    <div id="modal"></div>
    <script src="./practice.js"></script>
  </body>
</html>

*/

/*CSS STYLES

body {
  font-size: 62.5%;
  overflow: hidden;
  margin: 0;
}

#inputNote {
  width: 60%;
}

#submitNote {
  width: 60px;
}

#submitNote {
  background-color: darkcyan;
  border-radius: 5px;
  border: none;
  height: 25px;
}

#submitNote:hover {
  color: white;
}


#noteContainer {
    width: 700px;
    height: 500px;
    margin: auto;
    text-align: center;
    background-color: white;
    display: block;
    float: none;
  }
  
  #noteHeading {
    font-size: 2rem;
    color: darkcyan;
  }
  
  #savedNote {
    background-color: rgb(214, 214, 214);
    width: 300px;
    height: 140px;
    margin-top: 3rem;
    margin-right: 2rem;
    margin-left: 1rem;
    font-size: 1.5rem;
    float: left;
    overflow: hidden;
  }
  
  #savedNote > h4 {
    text-align: left;
    margin: 10px 0;
    width: 100px;
    padding-left: 20px;
  }
  
  #savedNote > p {
    overflow: hidden;
    height: 40px;
    padding-left: 20px;
    padding-right: 15px;
    margin-top: 0.5rem;
    text-align: left;
    word-wrap: break-word;
    margin-bottom: 10px;
  }
  
  #viewDetails {
    height: 30px;
    background-color: darkcyan;
    color: rgb(7, 7, 7);
    border: none;
    border-radius: 5px;
    float: right;
    margin-right: 10px;
  }
  
  #viewDetails:hover {
    color: white;
  }
  
  #deleteNote {
    height: 30px;
    border: none;
    border-radius: 5px;
    float: right;
    margin-right: 10px;
    position: relative;
    top: -50px;
    background-color: rgba(0, 0, 0, 0);
    display: none;
  }
  
  #savedNote:hover #deleteNote {
    display: block;
  }
  

  #modal {
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: rgba(54, 54, 54, 0.5);
    position: absolute;
    top: 0px;
    display: none;
    z-index: 1;
    justify-content: center;
  }
  
  #scopedNote {
    background-color: rgb(170, 101, 101);
    width: 600px;
    height: fit-content;
    margin-top: 3rem;
    margin-right: 2rem;
    margin-left: 1rem;
    font-size: 1.5rem;
    float: left;
  }
  
  #scopedNote > h4 {
    text-align: left;
    margin: 10px 0;
    width: 100px;
    padding-left: 20px;
  }
  
  #scopedNote > p {
    height: fit-content;
    padding-left: 20px;
    padding-right: 15px;
    margin-top: 0.5rem;
    text-align: left;
    word-wrap: break-word;
    margin-bottom: 10px;
  }
  
  #deleteNote2 {
    height: 30px;
    border: none;
    border-radius: 5px;
    float: right;
    margin-right: 10px;
    position: relative;
    top: -50px;
    background-color: rgba(0, 0, 0, 0);
  }
*/