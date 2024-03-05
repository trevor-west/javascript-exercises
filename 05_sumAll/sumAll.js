const sumAll = function(numOne, numTwo) {
  let arraySum = [];

  for (let x = numOne; x < numTwo; x++){
    arraySum.pop(x);
  }

  return arraySum;
};

// Do not edit below this line
module.exports = sumAll;
