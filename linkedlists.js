class LinkedList{
    constructor(){
        head = null;
        tail = null;
    }
    insertNode(newValue, target){
        const newNode = {
            value:newValue,
            next:null
        }
        if (target === undefined){
            if (!this.head){
                this.head = newNode;
            } else {
                this.tail.next = newNode;
            }
            this.tail = newNode;
        } else if (target===null){
            newNode.next = this.head;
            this.head = newNode;
        } else {
            if (target.next === null){
                this.tail = newNode;
            } else {
                newNode.next = target.next;
            }
            target.next = newNode;
        }
    }
}


const linkedList = new LinkedList()