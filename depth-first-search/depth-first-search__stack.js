const depthFirstSearch = (root) => {
  let stack = [];
  root.visited = true;

  stack.push(root);

  while (stack.length > 0) {
    let actualVertex = stack.pop();
    console.log(actualVertex.data);

    actualVertex.neighbours.forEach (v => {
      if (!v.visited) {
        v.visited = true;
        stack.push(v);
      }
    });
  }
};

module.exports = depthFirstSearch;