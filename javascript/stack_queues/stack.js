// stack using linked list 
// head is top
// FILO or LIFO

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor(maxSize) {
        this.top = null;
        this.size = 0;
        this.maxSize = maxSize;
    }

    // push operation
    push(data){
        if(this.size === this.maxSize){
            console.log("StackOverflow!!!");
            return;
        }
        let newNode = new Node(data);
        if(!this.top){
            this.top = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
    }


    // pop operation
    pop(){
        if(!this.top){

        console.log("Stack Underflow!!!");
            return;
        }
        let temp = this.top;
        this.top = temp.next;
        temp.next = null;
        this.size--;
        return temp.data;
    }

    display(){
        if(this.size==0){
            console.log("Stack is empty");
            return;
        }
        let current = this.top;
        let result = [];
        while(current){
            result.push(current.data);
            current = current.next;
        }

        console.log(result.reverse()); // display in LIFO order
    }
}


const mystack = new Stack(20);

mystack.push(10);

mystack.push(20);

mystack.push(30);

mystack.display(); // output: [30, 20, 10]

mystack.pop();

mystack.display(); // output: [20, 10]