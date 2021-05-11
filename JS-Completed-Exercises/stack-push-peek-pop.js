
class Stack{
    constructor(items = []){
        this.items = items
    }

    push(value){
        this.items.push(value)
    }

    pop(){
        this.count = this.items.length
        if (this.count <= 0) throw new Error('Stack is empty')
        this.items.pop()
    }

    peek(){
        this.count = this.items.length
        if (this.count <= 0) throw new Error (`stack is empty`)
        const find = this.items.length - 1;
        return this.items[find]
    }

    getCount(){
        this.count = this.items.length
        console.log(this.count)
    }

}

const c = new Stack()

/* the above code is my data stack/pop/peek/push/get-count, class function solution */

/* below is a better way of implementing this code */

const _items = new WeakMap()

class Stack2 {
    constructor(){
        _items.set(this, []) 
    /* at first I tried attempting to set items into a private property but I didn't 
    understand why I couldn't access this property in the functions that were in the 
    class body. My problem was that instead of using _items.set(this,[]) I typed out 
    _items = [] which will make it private but will not attribute the this keyword 
    so that I may reach it everywhere inside of the class object unlike the 
    Stack2 class that is a simplified way of achieving my solution*/
    }

    push(obj){
        _items.get(this).push(obj);
    }

    pop(){
        if (_items.get(this).length === 0) throw new Error('stack is empty')

        return _items.get(this).pop()
    }

    peek(){
        const items = _items.get(this);

        if (items.length === 0) throw new Error(`stack is empty`)

        return items[items.length - 1]
    }

    get count(){
        return _items.get(this).length
    }
}
