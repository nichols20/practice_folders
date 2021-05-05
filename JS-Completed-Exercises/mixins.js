function mixin (target, ...sources){
    Object.assign(target, ...sources);
}


const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating')
    }
}

const canWalk = {
    walk: function(){
        console.log('walking')
    }
}

const canSwim = {
    swim: function(){
        console.log('swimming')
    }
}

function Person(){

}

mixin(Person.prototype, canEat, canWalk)

const person = new Person()
console.log(person);

function Fish(){

}

mixin(Fish.prototype, canEat, canSwim)

const fish = new Fish;

console.log(fish)

/* in this exercise I learned about mixins and applied these functions,
to the mixin layout. what this does is it's used as an alternative to
inheritance. because inheritance should only be used for methods that
will attribute all methods inside the parent prototype and isn't applied
to more than one layer. *there Should be no hierachy* using mixins 
i'm able to make multiple functions pertaining to specific object categories
such as mammals(walk) and fish(swim) and automatically implement those
functions using my mixin function. */ 