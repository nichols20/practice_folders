

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



/* HTML USED IN CORRESPONDENCE TO JAVASCRIPT 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="#" />
    <link rel="stylesheet" href="./styles.css">
    <title>Document</title>
  </head>
  <body>
    <div class="list-container">
      <h1 id="h">To do for today</h1>
      <form id="form" action="" onsubmit="return false">
        <input id="input" type="text" name="input" value="">
        <button onclick="toDoList.listToDo();"></button>
      </form>
      <div id="list"></div>
    </div>
    <script src="./practice.js">
      
    </script>
  </body>
</html>


*/