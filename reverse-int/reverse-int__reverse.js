const reverseInt = (number) => {
  const reversed = number.toString(10).split('').reverse().join('') ;

  return parseInt(reversed) * Math.sign(number);
};

module.exports = reverseInt;