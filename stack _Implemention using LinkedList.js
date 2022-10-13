
// implemntion the stack with LinkedList

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

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }
    peek() {
        return this.top;
    }
    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPoniter = this.top; //udemy
            this.top = newNode  // want to add  coursra
            this.top.next = holdingPoniter   // the next of cousera is udemy
        }
        this.length++
        return this

    }
    pop() {
        if (!this.top) {
            return null
        }
        const holdingPoniter = this.top
        this.top.next = holdingPoniter
        this.length--;
        return this
    }
}


const stack = new Stack();
stack.push('udemy')
stack.push('css')
stack.push('coursera')
stack.pop()
console.log(stack)
