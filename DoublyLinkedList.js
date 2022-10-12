

class Node {
    constructor(value) {
        return this.head = {
            value: value,
            next: null,
            prev: null
        }
    }
}

class DoublyLinkedlist {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head
        this.length = 1
    }
    append(newValue) {
        let newNode = new Node(newValue)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        // console.log(this)
        return this
    }
    prepend(newValue) {
        let newNode = new Node(newValue)
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
        this.head = newNode
        this.length++
        // console.log(this)
        return this
    }
    printList() {
        let arr = []
        let currentNode = this.head;
        while (currentNode != null) {
            arr.push(currentNode.value)
            currentNode = currentNode.next
        }
        return arr
    }
    // 16    10         5
    //            99
    insert(index, newValue) {
        if (index >= this.length) {
            return this.append(newValue)
        }
        let newNode = new Node(newValue)
        let leader = this.traversalIndex(index - 1)//10
        let holdingValue = leader.next; //5
        leader.next = newNode;
        newNode.next = holdingValue;
        newNode.prev = leader
        holdingValue.prev = newNode
        this.length++
        // console.log(this)
        return this
    }
    // 16    10         5
    //            99
    remove(index) {
        let leader = this.traversalIndex(index - 1)//10
        let UnwantedNode = leader.next; //99 
        let FollwerNodeDeleted = UnwantedNode.next
        leader.next = UnwantedNode.next;
        FollwerNodeDeleted.prev = leader
        this.length--;
        console.log(this)
        return this;
    }
    traversalIndex(index) {
        let currentNode = this.head;
        let counter = 0;
        while (counter !== index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode;
    }


}
const list = new DoublyLinkedlist(10)
list.append(5)
list.prepend(16)
list.insert(2, 99)
// list.insert(3, 102)
list.remove(2)
console.log(list.printList());
