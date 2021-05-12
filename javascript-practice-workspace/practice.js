


  class toDO {
      constructor(){
          this.text = document.getElementById('input') /* retrieved the text input field and list div from html doc */
          this.list = document.getElementById('list')
      }

      listToDo(){
          /* once this function is called this creates a new ul element then adds the text input value to that element */
          const newTask = document.createElement('ul')
          const task = document.createTextNode(this.text.value)
          newTask.append(task)

          /* creates a button used fr deleting submitted tasks appended to each created task */
          this.remove = document.createElement('button')
          this.done = document.createTextNode('done')
          this.remove.append(this.done)
          newTask.append(this.remove)


          const div = this.list
          this.remove.onclick = function(){
            console.log('yes')
            div.removeChild(newTask)
        }

          /*adds new task to a div to be displayed on browser */
          this.list.appendChild(newTask)
          this.text.value = ''
      }

      
  }

  const toDoList = new toDO;