

function HtmlElement(){
    this.click = function(){
        console.log('clicked')
    }
}

HtmlElement.prototype.focus = function(){
    console.log('focus')
}

function HtmlSelectElement(...items){
    this.items = items
    this.addItem = function(add){
        this.items.push(add)
    }
    this.removeItem = function(remove){
        const index = this.items.indexOf(remove)
        this.items.splice(index, 1)
    }
    /* I created this render method as a demonstration of polymorphism this render method 
    will take all items defined and create individual elements per value stated inside of a for loop.
    before this occurs I created A parent element that will house each individual element inside of itself finally 
    returning the complete element as the result */
    this.render = function(){                                    
        const element = document.createElement('select')        
        for (item of this.items){
            const childElement = document.createElement('option')
            const elementContent = document.createTextNode(item)
            childElement.appendChild(elementContent)
            element.appendChild(childElement)
        }
        return element
    }
} 

function HtmlImageSelect(sources){
    HtmlSelectElement.call(this)
    delete this.items
    delete this.addItem
    delete this.removeItem
    this.sources = sources
    this.render = function(){
        this.sources = sources 
        return `<img src="${this.sources}" />`
    }
}

HtmlSelectElement.prototype = new HtmlElement /* correct implementation */

HtmlImageSelect.prototype = new HtmlElement
HtmlImageSelect.prototype.constructor = HtmlImageSelect

const e = new HtmlElement

const c = new HtmlSelectElement(1,2,3)

const img = new HtmlImageSelect('https')

HtmlSelectElement.prototype = new HtmlElement/* Incorrect implementation */

const elements = [
    new HtmlSelectElement(1,2,3),
    new HtmlImageSelect('loser')
];

for (let element of elements){
    console.log(element.render())
}

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


class Shape {
    constructor(color){
        this.color = color
    }

    move(){
        console.log('move')
    }
}

class Circle extends Shape{
    constructor(color){
        super(color)
    }
    draw(){
        console.log('draw')
    }
}

const c = new Circle

/* The extend keyword allows me to make a class inheirit the properties of another 
and implement the parent properties in the childs prototype without requiring me to
explicitly change the prototype then reset the constructor. ** if I create a constructor
in the parent class and create another constructor in the child class. I must first define
the parent constructors properties before I can continue this is accomplished by using the
keyword super than attributing the property value of the super constructor */


