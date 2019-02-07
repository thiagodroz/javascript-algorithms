const parent = i => Math.floor(i / 2);
const leftChild = i => i * 2;
const rightChild = i => (i * 2) + 1;

module.exports = class Heap {
  constructor() {
    this.arr = [];
    this.size = 0;
  }

  shiftUp(i) {
    while (i > 1 && this.arr[parent(i)] > this.arr[i]) {
      const temp = this.arr[parent(i)];

      this.arr[parent(i)] = this.arr[i];
      this.arr[i] = temp;

      i = parent(i);
    }
  }

  shiftDown(i) {
    let maxIndex = i;
    let l = leftChild(i);
    let r = rightChild(i);

    if (l <= this.size && this.arr[l] < this.arr[maxIndex]) {
      maxIndex = l;
    }
    if (r <= this.size && this.arr[r] < this.arr[maxIndex]) {
      maxIndex = r;
    }
    if (i !== maxIndex) {
      const temp = this.arr[i];

      this.arr[i] = this.arr[maxIndex];
      this.arr[maxIndex] = temp;

      this.shiftDown(maxIndex);
    }
  }

  insert(p) {
    this.size += 1;
    this.arr[this.size] = p;

    this.shiftUp(this.size);
  }

  extractMin() {
    const result = this.arr[1];

    this.arr[1] = this.arr[this.size];
    this.size -= 1;
    this.shiftDown(1);
    this.arr = this.arr.slice(0, this.size + 1);

    return result;
  }

  remove(i) {
    this.arr[i] = Infinity;
    this.shiftUp(i);
    this.extractMax();
  }

  changePriority(i, p) {
    const oldp = this.arr[i];

    this.arr[i] = p;

    if (p < oldp) {
      this.shiftUp(i);
    } else {
      this.shiftDown(i);
    }
  }
}
