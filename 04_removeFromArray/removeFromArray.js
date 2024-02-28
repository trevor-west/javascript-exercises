const removeFromArray = function(array, ...num) {

  for (let i = 0; i < array.length; i++){
    if(array[i] === num) {
      array.splice(num - 1, 1);
    } else if (array[i] === moreNum[i]) {
      array.splice(...moreNum() - 1, 1);
    }
  }

  return array;
}

// Do not edit below this line
module.exports = removeFromArray;
