const sumAll = function(numOne, numTwo) {
  let arraySum = [];
  let result = 0;

  for (let x = numOne; x <= numTwo; x++){
    arraySum.push(x);
  }

  for (let y = 0; y <= arraySum.length - 1; y++){
    result += arraySum[y];
  }

  return result;

};

// Do not edit below this line
module.exports = sumAll;
