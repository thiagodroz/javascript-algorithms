const chunkFunctions = [
  require('./array-chunk__for'),
  require('./array-chunk__slice')
];

chunkFunctions.forEach(chunk => {
  test('chunk function exists', () => {
    expect(chunk).toBeDefined();
  });

  test('chunk returns two chunks with two elements each', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });

  test('chunk returns three chunks, the last with only one element', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
});