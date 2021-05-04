
function Shape(color){
    this.color = color; /*added a property that should be inherited by all shapes */
}

Shape.prototype.duplicate = function(){
    console.log('duplicate')
}

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child;
} /* in this lesson I learned About intermediate function inheritance, I transfered 
over the code that reset the prototype of a constructor function into a new function
labeled extend that way I wouldn't have to retype those same two lines every time 
I decide to have a function inherit the Shape function. Now when needed I call extend 
(a,b) to whatever function and it automatically inherits the Shape prototype. examples
can be found in line 26 and 37 */
function Circle(radius, color){
    Shape.call(this, color); /* learned how to call super constructors used the 
                             call method to access the this.color property 
                             and attribute it to the circle function*/
    this.radius = radius
}

extend(Circle, Shape)

Circle.prototype.draw = function(){
    console.log('draw')
}
function Square(size, color){
    this.size = size

    Shape.call(this, color);
}

extend(Square, Shape)

const s = new Shape

const c = new Circle(1, 'red')

const squares = new Square(2, 'blue')