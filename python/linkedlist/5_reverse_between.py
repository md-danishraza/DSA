
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def reverse_between_three_pointers(head: ListNode | None, left: int, right: int) -> ListNode | None:
    if not head or left == right:
        return head

    dummy = ListNode(0, head)
    lp = dummy

    # 1. Advance lp to node before 'left'
    for _ in range(left - 1):
        lp = lp.next

    # 2. Reverse sublist from left to right
    curr = lp.next
    prev = None
    for _ in range(right - left + 1):
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node

    # 3. Reconnect the severed endpoints
    # lp.next is the original start of the sublist (now the new sublist tail)
    lp.next.next = curr
    lp.next = prev

    return dummy.next