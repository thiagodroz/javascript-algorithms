const pyramid = (n) => {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let i = 0; i < n; i++) {
    let level = '';

    for (let j = 0; j < 2 * n - 1; j++) {
      if (midpoint - i <= j && midpoint + i >= j) {
        level += '#';
      } else {
        level += ' ';
      }
    }

    console.log(level);
  }
};

module.exports = pyramid;