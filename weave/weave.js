const Queue = require('./queue');

const weave = (sourceA, sourceB) => {
  const q = new Queue();

  while (sourceA.peek() || sourceB.peek()) {
    if (sourceA.peek()) q.add(sourceA.remove());
    if (sourceB.peek()) q.add(sourceB.remove());
  }

  return q;
};

module.exports = weave;