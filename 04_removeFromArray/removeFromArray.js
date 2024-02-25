const removeFromArray = function(array, ...num) {

  for (num of array) {
    return array.slice(num - 1, num)
  }
  // for (let i = 0; i < array.length; i++){
  //   if(array[i] === num[i]) {
  //     return array.slice(num[i] - 1, num[i]);
  //   } continue;
  // }
  
  return array;
}

// Do not edit below this line
module.exports = removeFromArray;
