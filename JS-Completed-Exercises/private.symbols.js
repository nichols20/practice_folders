const _radius = Symbol();
const _draw = Symbol();
class Cirlce{
    constructor(radius){
        this[_radius] = radius
    }

    [_draw](){

    }
}

const c = new Cirlce(1)

/* in this exercise I learned how to introduce private properties and methods 
using the symbol() keyword. Although methods and properties still appear in the c object
you aren't able to acces them in the console which gives it a partially private attribute.
to convert a public function into a private one I created a _draw object and gave it 
the value of symbol() making the object private. Next I learned about computed property
names which allow me to add brackets to the name of a function then inserting the _draw
object as its defined name it will convert that method into a private method. */