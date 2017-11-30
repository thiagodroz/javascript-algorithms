const reverseInt = (number) => {
  return parseInt(number.toString(10).split('').reverse().join(''));
};

module.exports = reverseInt;