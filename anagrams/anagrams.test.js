const anagramsFunctions = [
  require('./anagrams__map'),
  require('./anagrams__sort')
];

anagramsFunctions.forEach(anagrams => {
  test('anagrams function exists', () => {
    expect(anagrams).toBeDefined();
  });

  test('anagrams returns true to "pokemon" and "kemonpo"', () => {
    expect(anagrams('pokemon', 'kemonpo')).toBe(true);
  });

  test('anagrams returns true to "Pokemon!" and "kemonpo"', () => {
    expect(anagrams('Pokemon!', 'kemonpo')).toBe(true);
  });

  test('anagrams returns false to "pokemon" and "digimon"', () => {
    expect(anagrams('pokemon', 'digimon')).toBe(false);
  });
});