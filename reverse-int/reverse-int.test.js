const reverseFunctions = [
  require('./reverse-int__reverse')
];

reverseFunctions.forEach(reverse => {
  test('reverse-int function exists', () => {
    expect(reverse).toBeDefined();
  });
  
  test('reverse-int returns the reversed integer', () => {
    expect(reverse(1234)).toBe(4321);
  });

  test('reverse-int returns the int if the reversed int is passed', () => {
    expect(reverse(reverse(8001))).toBe(8001);
  });

  test('reverse-int returns the reversed integer even if its negative', () => {
    expect(reverse(-1234)).toBe(-4321);
  });

  test('reverse-int returns the int if the reversed int is passed', () => {
    expect(reverse(reverse(-8001))).toBe(-8001);
  });

  test('reverse-int returns the reversed integer correcting the left zeros', () => {
    expect(reverse(123400)).toBe(4321);
  });
});