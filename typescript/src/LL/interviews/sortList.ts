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

  middleNode(head: node<T> = this.head!) {
    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
      slow = slow.next!;
      fast = fast.next.next!;
    }

    return slow;
  }

  public sort() {
    if (this.head) {
      // setting new head of sorted list
      this.head = this.sortList(this.head);
    }
  }

  //   we don't need end in in LL to find mid but only start
  private sortList(head: node<T> = this.head!): node<T> {
    // if no next node exit then its a single node
    if (!head || !head.next) {
      return head;
    }

    // find the mid
    const mid = this.middleNode(head);

    // disconnecting left and right half
    const rightStart = mid.next;
    mid.next = null;

    // left and right
    const leftHalf = this.sortList(head);
    const rightHalf = this.sortList(rightStart!);

    return this.mergeLL(leftHalf, rightHalf)!;
  }

  // merge
  private mergeLL(
    list1: node<T> | null,
    list2: node<T> | null
  ): node<T> | null {
    const dummy = new node<T>(0 as any);
    let tail = dummy;

    while (list1 && list2) {
      if (list1.value <= list2.value) {
        tail.next = list1;
        list1 = list1.next;
      } else {
        tail.next = list2;
        list2 = list2.next;
      }
      tail = tail.next;
    }

    // Attach remaining nodes
    if (list1) {
      tail.next = list1;
    }
    if (list2) {
      tail.next = list2;
    }

    // returning the start node
    return dummy.next;
  }

  bubbleSort() {
    if (!this.head || !this.head.next) {
      return;
    }

    let swapped: boolean;
    let current: node<T> | null;

    do {
      swapped = false;
      current = this.head;

      //   while we reach second last node
      while (current.next) {
        // Comparing current with next
        if (current.value > current.next.value) {
          // only swapping the value
          const temp = current.value;
          current.value = current.next.value;
          current.next.value = temp;

          swapped = true;
        }

        // Move forward
        current = current.next;
      }
    } while (swapped); // Continue if not already sorted
  }
}

const myLL = new LinkedList<number>();
myLL.InsertAtEnd(1000);
myLL.InsertAtEnd(900);
myLL.InsertAtEnd(800);
myLL.InsertAtEnd(700);
myLL.InsertAtEnd(600);
myLL.InsertAtEnd(500);
myLL.InsertAtEnd(400);
myLL.InsertAtEnd(300);
myLL.InsertAtEnd(200);

// myLL.list();
// myLL.sort();
// myLL.list();

// myLL.list();
// myLL.bubbleSort();
// myLL.list();
