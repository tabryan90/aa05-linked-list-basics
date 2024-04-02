class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail;
  }

  addToHead(val) {
    const newNode = new LinkedListNode(val, null);
    this.length++;

    newNode.next = this.head;

    this.head = newNode;

    if(!this.tail) this.tail = this.head;

  }

  addToTail(val) {
    const newNode = new LinkedListNode(val, null);
    this.length++;

    if(!this.head) {
      return this.head = newNode;
    }

    let current = this.head;

    while(current.next) {
      current = current.next
    }

    current.next = newNode;

  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
