
 class Vec{
    constructor(x2, y2){
        this.x2 = x2
        this.y2 = y2
    }

    plus(x1, y1) {
       this.x2 += x1
       this.y2 += y1
       return `Vec{x: ${this.x2}, y: ${this.y2}}`
    }

    minus(x1, y1){
        this.x2 -= x1
        this.y2 -= y1
        return `Vec{x: ${this.x2}, y: ${this.y2}}`
    }

   length (){
        let variable1 = Math.pow(this.x2 - 0, 2)
        let variable2 = Math.pow(this.y2 - 0, 2)
        let result = variable1 + variable2
       return Math.sqrt(result)
    }
}

const vec = new Vec(3, 4)

console.log(vec.length())

console.log(vec.plus(1,1))
console.log(vec.minus(1,1))