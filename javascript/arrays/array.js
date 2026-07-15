class Myarray{

    constructor(length){
        this.arr = {};
        this.size = 0;
        this.length = length;
    }
    traverse(){
        if (this.size == 0){
            console.log("Array is empty.");
            return;
        }

        // for(let i=0; i<this.size; i++){
        //     console.log(this.arr[i]);
        // }
        console.log(this.arr);
    }

    pushAtEnd(element) {
        if(this.size === this.length) {
            console.log("Array is full, can't add more elements.");
            return;
        }
        this.arr[this.size] = element;
        this.size++;
    }
    pushAtBegin(element) {
        const temp = {0: element}
        // shifting
        for(let i=0; i<this.size; i++) {
            temp[i+1] = this.arr[i];
        }
        this.arr = {...temp};
    }
    pushAtAnyPos(element,pos){
        if(pos<0 || pos>this.size) {
            console.log("Invalid position.");
            return;
        }
        if(this.size === this.length) {
            console.log("Array is full, can't add more elements.");
            return;
        }
        const temp = {};
        for(let i=0; i<pos; i++) {
            temp[i] = this.arr[i];
        }
        temp[pos] = element;
        for(let i=pos; i<this.size; i++) {
            temp[i+1] = this.arr[i];
        }
        this.arr = {...temp};
        this.size++;
    }

    pop(){
        if(this.size === 0){
            console.log("Array is empty, can't remove any elements.");
            return;
        }
        
        delete this.arr[this.size]
        this.size--;
    }

    deleteAtBegin(){
        if(this.size === 0){
            console.log("Array is empty, can't remove any elements.");
            return;
        }
        
        delete this.arr[0]
        for(let i=0; i<this.size-1; i++) {
            this.arr[i] = this.arr[i+1];
        }
       
        this.size--;
    }
    deleteAtAnyPos(pos){
        if(pos<0 || pos>=this.size) {
            console.log("Invalid position.");
            return;
        }
        if(this.size === 0){
            console.log("Array is empty, can't remove any elements.");
            return;
        }
        
        delete this.arr[pos]
        for(let i=pos; i<this.size-1; i++) {
            this.arr[i] = this.arr[i+1];
        }
       
        this.size--;
    
    
    }
}

const arr1 = new Myarray(5);

arr1.pushAtEnd(1);
arr1.pushAtEnd(2);
arr1.pushAtEnd(3);
arr1.pushAtEnd(4);
arr1.pushAtEnd(5);

arr1.traverse()

arr1.pushAtBegin(0);

arr1.traverse()

arr1.deleteAtBegin();
arr1.traverse();


arr1.deleteAtAnyPos(2);
arr1.traverse();