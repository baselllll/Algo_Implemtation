
// implemntion the stack with Lisked List

/*
css
udemy
js
*/
class Node {
    constructor(value) {
        return this.head = {
            value: value,
            next: null
        }
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        let newNode = new Node(value)
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode
        }
        this.length++
        return this

    }
    dequeue() {
        if (!this.first) {
            return null
        }
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.length--;
        return this
    }
}


const queue = new Queue();
queue.enqueue('udemy')
queue.enqueue('css')
queue.dequeue()
console.log(queue)
