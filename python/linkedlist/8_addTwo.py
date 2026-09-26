from typing import Optional

class ListNode:
    def __init__(self, val: int = 0, next: Optional["ListNode"] = None):
        self.val = val
        self.next = next


def add_two_numbers(
    l1: Optional[ListNode], l2: Optional[ListNode]
) -> Optional[ListNode]:
    s1: list[int] = []
    s2: list[int] = []

    # 1. Collect all digit values into stacks (MSD -> LSD)
    while l1:
        s1.append(l1.val)
        l1 = l1.next

    while l2:
        s2.append(l2.val)
        l2 = l2.next

    carry = 0
    head: Optional[ListNode] = None

    # 2. Add from LSD to MSD and prepend to head
    while s1 or s2 or carry:
        d1 = s1.pop() if s1 else 0
        d2 = s2.pop() if s2 else 0

        # (quotient,remainder)
        carry, val = divmod(d1 + d2 + carry, 10)

        # Prepend new node in front of current head
        head = ListNode(val, head)

    return head