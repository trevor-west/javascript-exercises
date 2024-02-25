const removeFromArray = function(array, ...num) {

  for (let i = 0; i < array.length; i++){
    if(array[i] == num[i]) {
      array.slice(num[i] - 1, num[i]);
      console.log(array);
    }
  }
  
  return array;
}

// Do not edit below this line
module.exports = removeFromArray;
