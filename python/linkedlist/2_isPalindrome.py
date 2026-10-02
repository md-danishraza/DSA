
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def find_middle(head):
    slow = head
    fast = head

    # slow ends at the end of the first half
    while fast.next and fast.next.next:
        slow = slow.next
        fast = fast.next.next

    return slow


def reverse(head):
    prev = None
    curr = head

    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node

    return prev


def is_palindrome(head):
    # Empty or single-node list
    if not head or not head.next:
        return True

    # Find middle
    mid = find_middle(head)

    # Reverse second half
    second_half = reverse(mid.next)

    # Compare both halves
    p1 = head
    p2 = second_half

    while p2:
        if p1.val != p2.val:
            return False

        p1 = p1.next
        p2 = p2.next

    return True

