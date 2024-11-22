class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{

    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
        } else{
            let current = this.root;
            while(true){
                // no duplicate node
                if (current.data === value) {
                    console.log("Duplicate value not allowed");
                    return this;
                }
                // if value is less than current node's value, go to left
                if(value < current.data){
                    // if left is empty
                    if(!current.left){
                        current.left = newNode;
                        return this;
                    }
                    // if left is not empty
                    current = current.left;
                // if value is greater than current node's value, go to right
                } else {
                    // if right is empty
                    if(!current.right){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }

    }

    includes(value){
        let current = this.root
        let level = 1;
        while(current){

            if(current.data === value){
                return [level,true];
            }
            if(value < current.data){
                current = current.left;
                level++;
            } else {
                current = current.right;
                level++;    
            }
        
        }
        // not found
        return false;
    }

}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);

console.log(tree.root); // Output: { data: 10, left: { data: 20, left: { data: 30, left: null, right: null }, right: null }, right: { data: 40, left: null, right: null } }

console.log(tree.includes(20)); // Output: true