const palindrome = (str) => {
  if (str === '') return true;

  if (str[0] === str[str.length - 1]) {
    return palindrome(str.slice(1, str.length - 1));
  }

  return false;
};

module.exports = palindrome;