class DynamicArray {
  constructor() {
    this.arr = [];
    this.size = 0;
    this.capacity = 2;
  }

  pushBack(e) {
    if (this.size === this.capacity) {
      this.capacity *= 2;
    }

    this.arr[this.size] = e;
    this.size += 1;
  }

  get(i) {
    if (i >= this.size || i < 0) throw new RangeError('Index out of range');

    return this.arr[i];
  }

  set(i, e) {
    if (i >= this.size || i < 0) throw new RangeError('Index out of range');

    this.arr[i] = e;
  }

  remove(i) {
    if (i >= this.size || i < 0) throw new RangeError('Index out of range');

    for (let j = i; j < this.size - 1; j++) {
      this.arr[j] = this.arr[j + 1];
    }

    this.size -= 1;
    this.arr[this.size] = undefined;
  }
}

module.exports = DynamicArray;