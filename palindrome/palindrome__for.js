const palindrome = (str) => {
  for (let i=0; i <= Math.ceil(str.length/2); i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }

  return true;
};

module.exports = palindrome;