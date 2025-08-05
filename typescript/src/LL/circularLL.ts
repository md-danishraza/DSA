class CNode<T> {
  value: T;
  next: CNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class CircularLinkedList<T> {
  head: CNode<T> | null = null;

  // Add to end
  append(value: T): void {
    const newNode = new CNode(value);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }
    //   move to last element
    let current = this.head;
    while (current.next !== this.head) {
      current = current.next!;
    }

    current.next = newNode;
    newNode.next = this.head;
  }

  // Add to beginning
  prepend(value: T): void {
    const newNode = new CNode(value);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }

    let tail = this.head;
    while (tail.next !== this.head) {
      tail = tail.next!;
    }

    newNode.next = this.head;
    this.head = newNode;
    tail.next = this.head;
  }

  // Delete a CNode by value
  delete(value: T): void {
    if (!this.head) return;

    let current = this.head;
    let prev: CNode<T> | null = null;

    do {
      if (current.value === value) {
        if (prev) {
          prev.next = current.next;
        } else {
          // Deleting head
          if (current.next === this.head) {
            this.head = null; // Only one CNode
            return;
          }

          let tail = this.head;
          while (tail.next !== this.head) {
            tail = tail.next!;
          }

          this.head = current.next;
          tail.next = this.head;
        }
        return;
      }

      prev = current;
      current = current.next!;
    } while (current !== this.head);
  }

  // Find a CNode by value
  find(value: T): CNode<T> | null {
    if (!this.head) return null;

    let current = this.head;
    do {
      if (current.value === value) return current;
      current = current.next!;
    } while (current !== this.head);

    return null;
  }

  // Print the list
  print(): void {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    let result = "";
    let current = this.head;
    do {
      result += `${current.value} -> `;
      current = current.next!;
    } while (current !== this.head);

    console.log(result + "(head)");
  }
}
