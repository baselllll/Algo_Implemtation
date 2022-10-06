class MyArrayImplement {
    constructor() {
        this.length = 0
        this.data = {}
    }
    get(Index) {
        return this.data[Index];
    }
    //add item in the end of array 
    push(item) {
        this.data[this.length] = item
        this.length++;
    }
    // delete the last data
    pop() {
        delete this.data[this.length - 1]
        this.length--;
    }
    deleteAtIndex(index) {
        this.shiftItems(index);
    }
    shiftItems(index) {
        for (let Cur = index; Cur < this.length - 1; Cur++) {
            this.data[Cur] = this.data[Cur + 1]
        }
        console.log(this.data[this.length - 1]);
        delete this.data[this.length - 1];
        this.length--;
    }
}
