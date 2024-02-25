const removeFromArray = function(array, ...num) {
  console.log(num);
  console.log(...num);
  for (let i = 0; i < num; i++){
    if(array[i] == num) {
      console.log(`i: ${i}`);
      console.log(`array[i]:  ${array[i]}`);
      return array.slice(num - 1, num);
    }
  }
  
  return array;
}

// Do not edit below this line
module.exports = removeFromArray;
