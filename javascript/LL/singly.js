// null is falsy value
//  if !null  means  not false

class Node{
    constructor(data){
        this.data = data;
        this.ref = null;
        
    }
}

class singlyLinkedList{
    constructor(){
        this.head = null;
    }

    // push
    push(data){
        let newNode = new Node(data);
        if (!this.head){
            this.head = newNode;

        }else{
            let current = this.head;
            while(current.ref){
                current = current.ref;
            }
            current.ref = newNode;
        }

    }

    pop(){
        if (!this.head){
            console.log("The list is empty");
            
        }else{
            let current = this.head;
            // second last
            while(current.ref.ref){
                current = current.ref;
            }
            current.ref = null;
        }
    }

    unshift(data){
        let newNode = new Node(data);
        if (!this.head){
            this.head = newNode;
            
        } else{
            newNode.ref = this.head;
            this.head = newNode;
        }

    }

    shift(){
        if (!this.head){
            console.log("The list is empty");
            
        } else{
            let temp = this.head;
            this.head = temp.ref;
            temp.ref = null;
        }
    }

    traverse(){
        if(!this.head){
            console.log("The list is empty");
        }else{
            let current = this.head;
            while(current){
                console.log(current.data);
                current = current.ref;
            }
        }
    }

    getFirst(){
        if (!this.head){
            console.log("The list is empty");
        }else{
            return this.head.data;
        }
    }

    getLast(){

        if (!this.head){
            console.log("The list is empty");
        } else{
            let current = this.head;
            while(current.ref){
                current = current.ref;
            }
            return current.data;
        }
    }

    getByIndex(index){
        if (!this.head || index < 0){
            console.log("Invalid index");
            return null;
        }else{
            let current = this.head;
            for(let i=0; i<index; i++){
                if(!current.ref){
                    console.log("Invalid index");
                    return null;
                }
                current = current.ref;
            }
            return current.data;
        }
    }

    insert(data,positions){
        const newNode = new Node(data);

        if(!positions || positions < 0){
            console.log("Invalid position");
            return;
        }else{
            if(positions === 0){
                newNode.ref = this.head;
                this.head = newNode;
            } else{
                let current = this.head;
                for(let i=0; i<positions-1; i++){
                    if(!current.ref){
                        console.log("Invalid position");
                        return;
                    }
                    current = current.ref;
                }
                newNode.ref = current.ref;
                current.ref = newNode;
            }
        }


    }

    getSize(){
        if(!this.head){
            console.log("List is empty");

        }else{
            let current = this.head;
            let size = 0;
            while(current){
                size++;
                current = current.ref;
            }
            return size;
        }
    }


    clear(){
        if(!this.head){
            console.log("List is empty");
        }else {
            const temp = this.head
            while(temp){
                const nextNode = temp.ref;
                temp.ref = null;

                temp = nextNode;

            }

            this.head = null;
        }

    }
}

const mylist = new singlyLinkedList(); //
mylist.push(10);
mylist.push(20);
mylist.push(30);
mylist.unshift(40);
mylist.traverse();
