
// implemntion the stack with Array

/*
css
udemy
js
*/


class Stack {
    constructor() {
        this.arr = [];
    }
    peek() {
        return this.arr[this.arr.length - 1];
    }
    push(value) {
        return this.arr.push(value)
    }
    pop() {
        return this.arr.pop()
    }
}


const stack = new Stack();
stack.push('udemy')
stack.push('css')
stack.push('coursera')
stack.pop()
console.log(stack)
