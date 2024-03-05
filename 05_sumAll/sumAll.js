const sumAll = function(numOne, numTwo) {
  let arraySum = [];
  let result = 0;

  if (typeof numOne !== 'number' || typeof numTwo !== 'number' || numOne < 0 || numTwo < 0) {
    console.error('ERROR');
  } else if (numOne > numTwo) {
      let z = numOne;
      numOne = numTwo;
      numTwo = z;

      for (let x = numOne; x <= numTwo; x++){
        arraySum.push(x);
      }
    
      for (let y = 0; y <= arraySum.length - 1; y++){
        result += arraySum[y];
      }
    
      return result;
    } else {
        for (let x = numOne; x <= numTwo; x++){
          arraySum.push(x);
        }
    
        for (let y = 0; y <= arraySum.length - 1; y++){
          result += arraySum[y];
        }
      
        return result;
      }
  };

// Do not edit below this line
module.exports = sumAll;
