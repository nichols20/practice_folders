
function HtmlElement(){
    this.click = function(){
        console.log('clicked')
    }
}

HtmlElement.prototype.focus = function(){
    console.log('focus')
}

function HtmlSelectElement(items = []){
    this.items = items
    this.addItem = function(add){
        this.items.push(add)
    }
    this.removeItem = function(remove){
        const index = this.items.indexOf(remove)
        this.items.splice(index, 1)
    }
    console.log(items)
} 

HtmlSelectElement.prototype = new HtmlElement /* correct implementation */

const e = new HtmlElement

const c = new HtmlSelectElement

HtmlSelectElement.prototype = new HtmlElement/* Incorrect implementation */


/* in this exercise I practiced creating my own protoypical inheritance,
overall this exercise was fairly simple when it came to applying the prototypes of 
individual constructor functions however I began to face problems when 
attempting to assign HtmlSelectElements prototype to the HtmlElement 
constructor function. This is because I had Defined the new prototype 
after I had already defined c = new HtmlSelectElement. Forgetting
that there is no hoisting in this scenario I was confused as to why the code
wasn't working not realizing I had to just move it above the defined c
object to fix this issue. My takeaway is the reminder that there is no hoisting
for constructor functions and if i wish to reassign the prototype of a constructor
function I must do it before defining the object containing said function */

