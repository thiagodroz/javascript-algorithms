module.exports = class Vertex {
  constructor(data) {
    this.visited = false;
    this.neighbours = [];
    this.data = data;
  }
};