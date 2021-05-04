
function Shape(color){
    this.color = color; /*added a property that should be inherited by all shapes */
}

Shape.prototype.duplicate = function(){
    console.log('duplicate')
}
function Circle(radius, color){
    Shape.call(this, color); /* learned how to call super constructors used the 
                             call method to access the this.color property 
                             and attribute it to the circle function*/
    this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.constructor = Circle;

Circle.prototype.draw = function(){
    console.log('draw')
}

const s = new Shape

const c = new Circle(1, 'red')