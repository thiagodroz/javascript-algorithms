const breadthFirstSearch = (root) => {
  let queue = [];
  root.visited = true;

  queue.push(root);

  while (queue.length > 0) {
    let actualVertex = queue[0];
    queue.shift();
    console.log(actualVertex.data);

    actualVertex.neighbours.forEach (v => {
      if (!v.visited) {
        v.visited = true;
        queue.push(v);
      }
    });
  }
};

module.exports = breadthFirstSearch;