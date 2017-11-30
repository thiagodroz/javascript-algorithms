const palindromeFunctions = [
  require('./palindrome__for'),
  require('./palindrome__recursive')
];

palindromeFunctions.forEach(palindrome => {
  test('palindrome function exists', () => {
    expect(palindrome).toBeDefined();
  });
  
  test('palindrome returns true if the word is a palindrome', () => {
    expect(palindrome('arara')).toBe(true);
  });

  test('palindrome returns false if the word isnt a palindrome', () => {
    expect(palindrome('pokemon')).toBe(false);
  });

  test('palindrome returns true if the string is empty', () => {
    expect(palindrome('')).toBe(true);
  });
});