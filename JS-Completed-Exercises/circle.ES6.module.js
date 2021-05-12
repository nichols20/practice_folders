const _radius = new WeakMap()

export class Circle{
    constructor(radius){
        _radius.set(this, radius)
    }

    draw(){
        console.log(`this circle has a radius of ${_radius.get(this)}`)
    }
}


/*this is how I would import the above Circle class */
import {Circle} from '/JS-Completed-Exercises/circle.ES6.module.js'

const c = new Circle(10)

c.draw()