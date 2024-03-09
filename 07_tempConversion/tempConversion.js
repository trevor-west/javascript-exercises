/*
x °C ≘ (x * 9 / 5 + 32)°F
*/
const convertToCelsius = function(fahren) {
  return (((fahren) * (9 / 5)) + 32);
};

/*
x °F ≘ (x − 32) * (5 / 9)°C
*/
const convertToFahrenheit = function(cels) {
  return ((cels - 32) * (5 / 9));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
