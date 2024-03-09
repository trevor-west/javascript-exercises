/*
x °F ≘ (x − 32) * (5 / 9)°C
*/
const convertToCelsius = function(cels) {
  return Math.round( ( ( (cels - 32) * (5 / 9) ) ) * 10) / 10;
};

/*
x °C ≘ (x * 9 / 5 + 32)°F
*/
const convertToFahrenheit = function(fahren) {
  return round( ( ( ( (fahren) * (9 / 5) ) + 32) ) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
