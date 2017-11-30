const reverseString = (str) => {
  let result = '';

  for (let c of str) {
    result = c + result;
  }

  return result;
};

module.exports = reverseString;