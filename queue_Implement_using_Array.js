
// implemntion the stack with Array

/*
css
udemy
js
*/

class Queue {
    constructor() {
        this.arr = []
    }
    peek() {
        return this.arr.length[this.arr.length - 1];
    }
    enqueue(value) {
        return this.arr.push(value)

    }
    dequeue() {
        this.arr.pop()
    }
}


const queue = new Queue();
queue.enqueue('udemy')
queue.enqueue('css')
queue.dequeue()
console.log(queue)
