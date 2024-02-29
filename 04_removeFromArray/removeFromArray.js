const removeFromArray = function(array, ...num) {
  let removedArray = array;
  let originalArray = array;

  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < num.length; x++) {
      if (originalArray[i] === num[x]) {
        array.splice(num[x] - 1, 1)
      }
    }
  }
  return removedArray;
}

// returns single values fine, still cannot handle multi values
// correctly -- issue should lie in splice(num[x])

// Do not edit below this line
module.exports = removeFromArray;
