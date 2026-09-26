
from typing import Optional, List

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def next_larger_nodes(head: Optional[ListNode]) -> List[int]:
    vals: List[int] = []
    curr = head
    while curr:
        vals.append(curr.val)
        curr = curr.next

    n = len(vals)
    ans = [0] * n
    stack: List[int] = []

    for i in range(n - 1, -1, -1):
        while stack and stack[-1] <= vals[i]:
            stack.pop()

        if stack:
            ans[i] = stack[-1]

        stack.append(vals[i])

    return ans