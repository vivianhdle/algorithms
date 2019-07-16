class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    //if given a target, add after that target
    //if target is null, add to the beginning
    //if there is no target, add to the end
    insertNode(newValue, target){
        const newNode = {
            value:newValue,
            next:null
        }
        if (target === undefined){//add to the end of list
            if (!this.head){
                this.head = newNode;
            } else {
                this.tail.next = newNode;
            }
            this.tail = newNode;
        } else if (target===null){ //add to beginning
            newNode.next = this.head;
            this.head = newNode;
        } else {
            if (target.next === null){ //add behind another node
                this.tail = newNode;
            } else {
                newNode.next = target.next;
            }
            target.next = newNode;
        }
    }
    searchNode(targetValue){
        let looking = true;
        let checking = this.head;
        while ( looking ) {
            if (checking.value === targetValue){
                looking = false;
                return checking;
            } else if (checking.next === null){
                return null;
            } else {
                checking = checking.next;
            }
        }
    }
    deleteNode(targetValue){
        let found = this.searchNode(targetValue);
        if (found === null) {
            return 'Node not found'
        } else {

        }
    }
}


const linkedList = new LinkedList()
linkedList.insertNode(5);
linkedList.insertNode(7);
linkedList.insertNode(9);
console.log(linkedList);
console.log(linkedList.searchNode(9));