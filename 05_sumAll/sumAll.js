const sumAll = function(numOne, numTwo) {
  let arraySum = [];

  for (let x = numOne; x <= numTwo; x++){
    arraySum.push(x);
  }

  let result = 0;

  for (let y = 0; y <= arraySum.length; y++){
    result += arraySum[y];
  }

  return result;

};

// Do not edit below this line
module.exports = sumAll;
