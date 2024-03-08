const removeFromArray = function(array, ...num) {
  return array.filter( val => !num.includes(val))
};

// credit: https://stackoverflow.com/questions/71534020/how-do-i-remove-multiple-elements-from-an-array

// Do not edit below this line
module.exports = removeFromArray;
