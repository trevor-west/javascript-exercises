/*
x °F ≘ (x − 32) * (5 / 9)°C
*/
const convertToCelsius = function(cels) {
  return ((cels - 32) * (5 / 9));
};

/*
x °C ≘ (x * 9 / 5 + 32)°F
*/
const convertToFahrenheit = function(fahren) {
  return (((fahren) * (9 / 5)) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
