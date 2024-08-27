const convertToCelsius = function (temp) {
  let c = (temp - 32) / (9 / 5);
  return +c.toFixed(1)
};

const convertToFahrenheit = function (temp) {
  let f = temp * (9 / 5) + 32;
  return +f.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
