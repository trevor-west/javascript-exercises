const reverseString = function(string) {
  let reversedStr = "";

  for (let i = string.length; i > 0; i--){
    reversedStr += string[i];
  }

  return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
