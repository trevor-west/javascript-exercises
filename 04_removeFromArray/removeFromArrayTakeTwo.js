const removeFromArray = function(array, ...num) {
  let newArr = [];

  array.forEach((item) => {
    if (!num.includes(item)) {
      newArr.push(item);
    };
  });

  return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;