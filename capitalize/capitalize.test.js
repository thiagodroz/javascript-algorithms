const capitalizeFunctions = [
  require('./capitalize__slice'),
  require('./capitalize__for')
];

capitalizeFunctions.forEach(capitalize => {
  test('capitalize function exists', () => {
    expect(capitalize).toBeDefined();
  });

  test('capitalize returns "Pokemon" to "pokemon"', () => {
    expect(capitalize('pokemon')).toBe('Pokemon');
  });

  test('capitalize returns "Pokemon! Lets Catch!" to "pokemon! Lets catch!"', () => {
    expect(capitalize('pokemon! Lets catch!')).toBe('Pokemon! Lets Catch!');
  });
});