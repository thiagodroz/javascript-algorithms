const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
  }

  size() {
    let size = 0;
    let current = this.head;

    while (current) {
      size++;
      current = current.next;
    }

    return size;
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.removeAt(0);
  }

  removeLast() {
    this.removeAt(this.size() - 1);
  }

  insertLast(data) {
    this.insertAt(data, this.size());
  }

  getAt(index) {
    if (!this.head) return null;

    let counter = 0;
    let current = this.head;

    while (current) {
      if (counter === index) return current;

      counter++;
      current = current.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);

    if (!previous || !previous.next) return;
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const newNode = new Node(data, previous.next);

    previous.next = newNode;
  }

  forEach(fn) {
    let current = this.head;
    let counter = 0;

    while (current) {
      fn(current, counter);
      current = current.next;
      counter++;
    }
  }

  * [Symbol.iterator]() {
    let current = this.head;

    while (current) {
      yield current;
      current = current.next;
    }
  }
};

module.exports = LinkedList;