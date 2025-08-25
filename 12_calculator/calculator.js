const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

const multiply = function (arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function (base, exp) {
  return base ** exp;
};

const factorial = function (int) {
  let result = 1;
  for (let i = 1; i <= int; i++) result *= i;
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
