export {};

// node with value and next
class node<T> {
  value: T;
  next: node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  // class attributes
  private head: node<T> | null = null;
  private tail: node<T> | null = null;
  private size: number = 0;

  InsertAtEnd(value: T) {
    if (!this.head) {
      const newNode = new node<T>(value);
      this.head = newNode;
      this.tail = newNode;
    } else {
      const newNode = new node<T>(value);
      if (this.tail) {
        this.tail.next = newNode;
      }
      // move tail
      this.tail = newNode;
    }
    this.size++;
  }

  list() {
    if (!this.head) {
      console.log("list is empty!!");
    } else {
      let currentNode = this.head;
      // print first
      console.log(currentNode.value);
      while (currentNode.next) {
        currentNode = currentNode.next;
        console.log(currentNode.value);
      }
    }
  }

  private reverseSubList(head: node<T> | null): node<T> | null {
    let prev: node<T> | null = null;
    let curr = head;

    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev; // new head of the reversed part
  }
  middleNode(head: node<T> = this.head!) {
    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
      slow = slow.next!;
      fast = fast.next.next!;
    }

    console.log(`middle node is ${slow.value}`);
    return slow;
  }

  checkPalindrome() {
    // Empty or single node is always a palindrome
    if (!this.head || !this.head.next) return true;

    // find middle
    const mid = this.middleNode(this.head);

    // reverse second half
    let secondHalfStart = this.reverseSubList(mid.next);

    // Compare pointers
    let p1 = this.head; // Start of list
    let p2 = secondHalfStart; // Start of reversed second half
    let isPalindrome = true;

    while (p2) {
      if (p1!.value !== p2.value) {
        isPalindrome = false;
        break;
      }
      p1 = p1!.next!;
      p2 = p2.next;
    }

    // restoring the list
    // Reverse the second half again and re-attach it
    mid.next = this.reverseSubList(secondHalfStart);

    console.log(isPalindrome);
  }
}

const myLL = new LinkedList<number>();
myLL.InsertAtEnd(200);
myLL.InsertAtEnd(300);
myLL.InsertAtEnd(400);
myLL.InsertAtEnd(500);
myLL.InsertAtEnd(400);
myLL.InsertAtEnd(400);
myLL.InsertAtEnd(300);
myLL.InsertAtEnd(200);
myLL.list();
myLL.checkPalindrome();
