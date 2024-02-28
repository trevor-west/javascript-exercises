const removeFromArray = function(array, ...num) {
// if num is 1, num = [1]
// if num is 1, 2, 3, then num = [1, 2, 3]

  for (let i = 0; i < array.length; i++){
    if(array[i] === num[i]) {
      array.splice(num, 1);
    }
  }
  return array;

}

// Do not edit below this line
module.exports = removeFromArray;
