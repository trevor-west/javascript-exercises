const removeFromArray = function(array, ...num) {
  for (let i = 0; i < num; i++){
    if(array[i] == num) {
      return array.slice(num - 1, num);
    }
  }
  
  return array;
}

// Do not edit below this line
module.exports = removeFromArray;
