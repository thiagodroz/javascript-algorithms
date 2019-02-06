const fizzBuzz = (n) => {
  Array.from(Array(n).keys()).forEach(i => {
    const number = i + 1;

    if (number % 15 === 0) {
      console.log('fizzbuzz');
    } else if (number % 3 === 0) {
      console.log('fizz');
    } else if (number % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(number);
    }
  });
};

module.exports = fizzBuzz;