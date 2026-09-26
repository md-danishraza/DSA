
from typing import Optional, List

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def split_list_to_parts(head: Optional[ListNode], k: int) -> List[Optional[ListNode]]:
    # Count length
    length = 0
    curr = head
    while curr:
        length += 1
        curr = curr.next

    base_size, extra = divmod(length, k)

    ans: List[Optional[ListNode]] = []
    curr = head

    for i in range(k):
        if not curr:
            ans.append(None)
            continue

        ans.append(curr)
        part_size = base_size + (1 if i < extra else 0)

        # Move to the tail of this segment
        for _ in range(part_size - 1):
            curr = curr.next

        # Cut link
        next_head = curr.next
        curr.next = None
        curr = next_head

    return ans
