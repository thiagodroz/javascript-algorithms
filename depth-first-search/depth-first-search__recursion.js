const depthFirstSearch = (node) => {
  if (!node || node.visited) return null;

  console.log(node.data);

  while (node.neighbours.length > 0) {
    depthFirstSearch(node.neighbours.pop());
  }
};

module.exports = depthFirstSearch;