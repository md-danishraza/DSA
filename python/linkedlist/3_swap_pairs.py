
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def swap_pairs(head):
    if not head or not head.next:
        return head

    first = head
    second = head.next

    # New head after first swap
    new_head = second

    # Previous pair's tail
    prev = None

    while first and second:
        # Save next pair
        next_pair = second.next

        # Swap current pair
        second.next = first
        first.next = next_pair

        # Connect previous pair to current pair
        if prev:
            prev.next = second

        # Move to next pair
        prev = first
        first = next_pair
        second = first.next if first else None

    return new_head

