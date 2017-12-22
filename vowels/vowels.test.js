const vowelsFunctions = [
  require('./vowels__for'),
  require('./vowels__regexp')
];

vowelsFunctions.forEach(vowels => {
  test('vowels function exists', () => {
    expect(vowels).toBeDefined();
  });

  test('vowels called with "pokemon" = 3', () => {
    expect(vowels('pokemon')).toBe(3);
  });

  test('vowels called with "aeiouuu" = 7', () => {
    expect(vowels('aeiouuu')).toBe(7);
  });

  test('vowels called with "rplmtwq" = 0', () => {
    expect(vowels('rplmtwq')).toBe(0);
  });
});