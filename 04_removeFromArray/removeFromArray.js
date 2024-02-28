const removeFromArray = function(array, ...num) {
// if num is 1, num = [1]
// if num is 1, 2, 3, then num = [1, 2, 3]

  for (let i = 0; i < array.length; i++){
    if(array[i] === num) {
      array.splice(num - 1, 1);
    } else if (array[i] === moreNum[i]) {
      array.splice(...moreNum() - 1, num.length);
    }
  }

  return array;
}

// Do not edit below this line
module.exports = removeFromArray;
