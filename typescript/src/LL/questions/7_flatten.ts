
export {}

// l - 430
// multilevel node type definition
class _Node {
    val: number
    prev: _Node | null
    next: _Node | null
    child: _Node | null
    
    constructor(val?: number, prev? : _Node, next? : _Node, child? : _Node) {
        this.val = (val===undefined ? 0 : val);
        this.prev = (prev===undefined ? null : prev);
        this.next = (next===undefined ? null : next);
        this.child = (child===undefined ? null : child);
    }
}




function flatten(head: _Node | null): _Node | null {
    if(!head){
        return head
    }

    // preorder DFS (root,left(child),right(next)) return tail
    function flattenDFS(curr: _Node | null): _Node | null {
        let tail: _Node | null = curr;

        while(curr){
            const nextNode: _Node | null = curr.next

            if(curr.child){
                // call recursive
                const childTail = flattenDFS(curr.child)

                // connext curr to child as next
                curr.next = curr.child
                curr.child.prev = curr

                // if nextnode then connect with tail
                if(nextNode){
                    childTail!.next = nextNode
                    nextNode.prev = childTail
                }

                // clear child pointer
                curr.child = null

                // update tail
                tail = childTail

            }else{
                tail = curr
            }
            // move pointer
            curr = nextNode;
        }

        return tail
    }

    flattenDFS(head);
    return head;
};

