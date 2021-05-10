
class Circle{
    constructor(radius){
        this.radius = radius
    }

    draw(){

    }

    static parse(str){
        const radius = JSON.parse(str).radius
        return new Circle(radius)
    }
}

const circle = Circle.parse('{"radius":1}')
console.log(circle)


/* static methods is a useful utility tool that is used to define methods that aren't 
specific to one single class. for example draw() is a specific method that is called
for the circle class. while a method like parse is a function that isn't specific to 
one individual class meaning we would like to use that same method multiple times
in other locations */