const maxCharsFunctions = [
  require('./max-chars__map')
];

maxCharsFunctions.forEach(maxChars => {
  test('max-chars function exists', () => {
    expect(maxChars).toBeDefined();
  });
});