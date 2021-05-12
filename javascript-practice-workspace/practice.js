

function getInput(){
    const text = document.getElementById('input').value
    console.log(text)
    document.getElementById('input').value = ''

    
    const will = document.createElement('ul')
    const content = document.createTextNode(text)
    will.appendChild(content)
    const remove = document.createElement('button')
    const finished = document.createTextNode('done')
    remove.appendChild(finished)
    will.append(remove)
    const div = document.getElementById('list')
    div.appendChild(will)
    

  }