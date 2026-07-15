class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

}

class Tree{
    constructor(){
        this.root = null;
    }

    // applying BST 
    // insert
    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
        } else{
            let current = this.root;
            while(true){
                // no duplicate node
                if(current.data === value){
                    return;
                }
                if(value < current.data){
                    if(!current.left){
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else {
                    if(!current.right){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }


    bfs(){
        if (!this.root){
            return "tree is empty";
        }

        const root = this.root
        // to store all the node level by level
        const queue = [root];
        let data = [];


        while (queue.length){
            const current = queue.shift();
            data.push(current.data);


            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }
        }


        return data;
    }

    
    dfsPreOrder(root,values){
        
        // base case : null then return
        if (!root){
            return;
        }

        values.push(root.data);

        if(root.left){
            this.dfsPreOrder(root.left, values);
        }

        if (root.right){
            this.dfsPreOrder(root.right,values);
        }
        
        return values;
    }
    dfsPostOrder(root,values){
        
        // base case : null then return
        if (!root){
            return;
        }

        
        if(root.left){
            this.dfsPostOrder(root.left, values);
        }
        
        if (root.right){
            this.dfsPostOrder(root.right,values);
        }
        
        values.push(root.data);
        
        return values;
    }
    dfsInOrder(root,values){
        
        // base case : null then return
        if (!root){
            return;
        }

        
        if(root.left){
            this.dfsInOrder(root.left, values);
        }
        
        values.push(root.data);
        
        if (root.right){
            this.dfsInOrder(root.right,values);
        }

        
        return values;
    }


    
}


const tree = new Tree();

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);

// console.log(tree.bfs()); // Output: [10, 20, 30, 40]

console.log(tree.dfsPreOrder(tree.root, [])); // Output: [10, 20, 30, 40]
