const removeFromArray = function(array, num, ...moreNum) {
  let removedArray = [];
  removedArray.push(array[num - 1], array[...moreNum - 1]);

  return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
