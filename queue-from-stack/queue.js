const Stack = require('./stack');

class Queue {
  constructor() {
    this.main = new Stack();
    this.temp = new Stack();
  }

  add(record) {
    this.main.push(record);
  }

  remove() {
    while (this.main.peek()) {
      this.temp.push(this.main.pop());
    }

    const record = this.temp.pop();

    while (this.temp.peek()) {
      this.main.push(this.temp.pop());
    }

    return record;
  }

  peek() {
    while (this.main.peek()) {
      this.temp.push(this.main.pop());
    }

    const record = this.temp.peek();

    while (this.temp.peek()) {
      this.main.push(this.temp.pop());
    }

    return record;
  }
};

module.exports = Queue;