class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class queue{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    // enqueue
    enqueue(data){
        let newNode = new Node(data);
        if(!this.front){
            this.front = newNode;
            this.rear = newNode;
        } else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue(){
        if(!this.front){
            console.log("Queue is empty");
            return null;
        } else{
            let temp = this.front;
            this.front = this.front.next;
            this.size--;
            if(this.front == null){
                this.rear = null;
            }
            return temp.data;
        }
    }

    display(){
        let current = this.front;
        let arr = [];
        while(current){
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }

    min(){
        if(!this.front){
            console.log("Queue is empty");
            return null;
        } else{
            let min = this.front.data;
            let current = this.front;
            while(current){
                if(current.data < min){
                    min = current.data;
                }
                current = current.next;
            }
            return min;
        }
    }
}



const myqueue = new queue();

myqueue.enqueue(10);

myqueue.enqueue(20);

myqueue.enqueue(30);

console.log(myqueue.display()); // [10, 20, 30]

console.log(myqueue.dequeue()); // 10

console.log(myqueue.display()); // [20, 30]

console.log(myqueue.min()); // 20