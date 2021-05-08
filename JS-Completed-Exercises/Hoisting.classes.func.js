class Circle {     /* in ES6 I can create a class function that can inherit multiple methods and properties
    methods that are defined in the body of a class will appear in the objects prototype containing the
    Circle class. If I want methods to be displayed inside of the object instead of the objects prototype
    I simply define the method inside of a constructor function using the this keyword */
    constructor(radius){
        this.radius = radius
        this.move = function(){
            console.log('move')
        }
    }
    draw() {
        console.log('draw')
    }
}

const circle = new Circle(1)

/* I also learned about the difference between a function declaration and a function expression. 
In addition to its different syntax function declarations also have the ability to be Hoisted while 
function expressions cannot be hoisted */

function sayHello() {}

const sayGoodbye = function(){};


/* both class functions and class declarations cannot be hoisted */
class Circle {}

const square = class{};