const _radius = new WeakMap()

export class Circle{
    constructor(radius){
        _radius.set(this, radius)
    }

    draw(){
        console.log(`this circle has a radius of ${_radius.get(this)}`)
    }
}