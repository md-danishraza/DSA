// doubly linked list with head and tail

class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    // push 
    push(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

    }

    pop(){
        if(!this.head){
            console.log("The list is empty.");
            return;
        }else{
            let poppedNode = this.tail;
            if(this.head === this.tail){
                this.head = null;
                this.tail = null;
            } else{
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            poppedNode.prev = null;
            return poppedNode.data;
        }
    }

    unshift(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    shift(){
        if(!this.head){
            console.log("The list is empty.");
            return;
        } else{
            let shiftedNode = this.head;
            if(this.head === this.tail){
                this.head = null;
                this.tail = null;
            } else{
                this.head = this.head.next;
                this.head.prev = null;
            }
            shiftedNode.next = null;
            return shiftedNode.data;
        }
    }

    reverse(){
        let current = this.head;
        // swapping the head and tail
        this.head = this.tail
        this.tail = current
        
        while(current){
            let temp = current.prev
            current.prev = current.next
            current.next = temp
            current = current.prev
        }

    }

    display(){
        let current = this.head;
        let result = '';
        while(current){
            result += current.data +'-> ';
            current = current.next
        }
        console.log(result + 'null');
    }

}

let myList = new DoublyLinkedList();

myList.push(1);

myList.push(2);

myList.push(3);

myList.display();

myList.reverse();

myList.display();