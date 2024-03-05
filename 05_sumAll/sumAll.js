const sumAll = function(numOne, numTwo) {
  let arraySum = [];

  for (let x = numOne; x <= numTwo; x++){
    arraySum.push(x);
  }

  for (num of arraySum) {
    num += num;
  }
};

// Do not edit below this line
module.exports = sumAll;
