const removeFromArray = function(array, ...num) {
  let removedArray = [];
  for (num of array)  {
    removedArray = array.pop(num - 1);
  };

  return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
