
class Matrix{
    constructor(width, height, element = (x, y) => undefined){
        this.width = width;
        this.height = height;
        this.content = [];
        for (let y = 0; y < height; y++ ){
            // a for loop in a for loop will loop until the condition is met then
            //will return to the parent loop, if the parents loops condition isn't met yet 
            //it will continue the child for loop meaning x goes back to equalling 0
            for (let x = 0; x < width; x++){
                //the calculation in the bracket just appends element() value
                //into individual indexes, it goes 0,1,2,3
                this.content[y * width + x] = element(x,y);
            }
        }
    }
    
    
    get(x, y){
        console.log(this.content[y * this.width + x])
        return this.content[y * this.width + x];
    }
    set(x, y, value){
        this.content[y * this.width + x] = value;
    }
}


class MatrixIterator{
    constructor(matrix){
        //if this.x and this.y aren't defined array values = NAN & Undefined
        this.x = 0;
        this.y = 0;
        this.matrix = matrix
    }

    
    next(){
        if (this.y == this.matrix.height) return {done: true};

        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        }
        this.x++
        console.log(this.x)

        if (this.x == this.matrix.width){
            this.x = 0
            this.y++;
        }
        console.log(value)
        return {value, done: false}
    }
    
}

Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this)
}

let matrix = new Matrix(2,2, (x, y) => `value ${x}, ${y}`)
for (let {x, y, value} of matrix){
    console.log( x, y, value)
}

