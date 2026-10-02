
from typing import Optional


class ListNode:
    def __init__(self, val: int = 0, next: Optional["ListNode"] = None):
        self.val = val
        self.next = next


def sort_list(head: Optional[ListNode]) -> Optional[ListNode]:
    # Base case: 0 or 1 node is already sorted
    if not head or not head.next:
        return head

    # 1. Split list using fast & slow pointers
    # Starting fast at head.next stops slow right at the end of the left half,
    # eliminating the need for a separate 'prev' pointer.
    slow = head
    fast = head.next

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    # Sever the left half from the right half
    mid = slow.next
    slow.next = None

    # 2. Recursively divide both halves
    left = sort_list(head)
    right = sort_list(mid)

    # 3. Merge sorted halves
    return merge(left, right)


def merge(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
    dummy = ListNode(0)
    curr = dummy

    while l1 and l2:
        if l1.val <= l2.val:
            curr.next = l1
            l1 = l1.next
        else:
            curr.next = l2
            l2 = l2.next
        curr = curr.next

    # Splice remaining chain
    curr.next = l1 if l1 else l2
    return dummy.next