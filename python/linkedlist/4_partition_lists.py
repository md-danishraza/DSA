
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def partition(head, x):
    left = right = None
    left_head = right_head = None

    curr = head

    while curr:
        next_node = curr.next

        if curr.val < x:
            if not left:
                left = left_head = curr
            else:
                left.next = curr
                left = curr
        else:
            if not right:
                right = right_head = curr
            else:
                right.next = curr
                right = curr

        curr = next_node

    # End right partition
    if right:
        right.next = None

    # Connect left → right
    if left:
        left.next = right_head
        return left_head

    return right_head

