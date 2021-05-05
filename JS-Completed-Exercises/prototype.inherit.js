
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

Circle.prototype.duplicate = function(){
    Shape.prototype.duplicate.call(this) /* if you wish to still call the first
    implementation of the parent prototype you can do so by using the call method */

    console.log('duplicate circle')
}/* used the method override method to change the duplicate function for the circle
constructor after the circle constructor had inherited the initial properties of
the shape constructor function */

Circle.prototype.draw = function(){
    console.log('draw')
}

function Square(size, color){
    this.size = size

    Shape.call(this, color);
}

extend(Square, Shape)

/* duplicated circle.prototype.duplicate for square object */

Square.prototype.duplicate = function(){
    Shape.prototype.duplicate.call(this) 
    console.log('duplicate Square')
}


const shapes = [
    new Circle,
    new Square
]

/* added this for of loop for an example of polymorphism, what this did
was allow me to call multiple different forms of the shape object
and call each objects duplicate function by morhphing it into one line
of code. Instead of having to wrtie multiple individual if statements
depending on the type of shape.*/
for (let shape of shapes){
    shape.duplicate();
}


const s = new Shape

const c = new Circle(1, 'red')

const squares = new Square(2, 'blue')