from typing import Optional

class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child




def flatten(head:Optional['Node'])->Optional['Node']:
    if not head:
        return head

    dummyNode = Node(0)
    curr,stack = dummyNode,[head]

    while(stack):
        temp = stack.pop()

        # add child later so that i get proccess first (stack LIFO)
        if (temp.next) : stack.append(temp.next)
        if(temp.child) : stack.append(temp.child)

        # update pointer
        curr.next = temp
        temp.prev = curr
        curr = curr.next
        # make child null
        temp.child = None 

    # break head prev
    dummyNode.next.prev = None
    return dummyNode.next