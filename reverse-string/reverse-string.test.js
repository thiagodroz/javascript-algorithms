const reverseFunctions = [
  require('./reverse-string__reverse'),
  require('./reverse-string__for'),
  require('./reverse-string__recursion')
];

reverseFunctions.forEach(reverse => {
  test('reverse-string function exists', () => {
    expect(reverse).toBeDefined();
  });

  test('reverse-string returns the reversed string', () => {
    expect(reverse('pokemon')).toBe('nomekop');
  });

  test('reverse-string returns the string if the reversed string is passed', () => {
    expect(reverse(reverse('pokemon'))).toBe('pokemon');
  });
});