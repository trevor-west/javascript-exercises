const removeFromArray = function(array, ...num) {
  console.log(`num before call: ${num}`);
  console.log(`...num before call: `);
  console.log(...num);
  let numArray = ...num;
  console.log(`numArray: ${numArray}`);
  for (let i = 0; i < array.length; i++){
    console.log(`num before first for call: ${num}`);
    console.log(`...num before first for call: `);
    console.log(...num);
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
