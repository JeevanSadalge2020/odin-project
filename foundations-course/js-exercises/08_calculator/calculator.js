const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = 0;
  if (arr.length === 0) return 0
  for (const item of arr) {
    sum += item;
  }
  return sum
};

const multiply = function (arr) {
  let mul = 1;
  if (arr.length === 0) return 0
  for (const item of arr) {
    mul *= item;
  }
  return mul
};

const power = function (a, b) {
  return a ** b
};

const factorial = function (num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i
  }
  return fact
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
