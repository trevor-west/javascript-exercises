const removeFromArray = function(array, num) {

  for (let i = 0; i < array.length; i++){
    if(array[i] === num[i]) {
      return array.slice(num[i] - 1, num[i]);
    }
  }
  
  return array;
}

// Do not edit below this line
module.exports = removeFromArray;
