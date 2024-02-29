const removeFromArray = function(array, ...num) {

  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < num.length; x++) {
      if (array[i] === num[x]) {
        array.splice(num[x] - 1, 1);
      }
    }
  }
  return array;
}

// returns single values fine, still cannot handle multi values
// correctly -- issue should lie in splice(num[x])

// Do not edit below this line
module.exports = removeFromArray;
