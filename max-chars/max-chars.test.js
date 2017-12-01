const maxCharsFunctions = [
  require('./max-chars__char-map')
];

maxCharsFunctions.forEach(maxChars => {
  test('max-chars function exists', () => {
    expect(maxChars).toBeDefined();
  });

  test('max-chars function returns an empty string if an empty string is passed', () => {
    expect(maxChars('')).toEqual('');
  });

  test('max-chars function returns "o" if "pokemon! digimon! youtube!" is passed', () => {
    expect(maxChars('pokemon! digimon! youtube!')).toEqual('o');
  });
});