'use strict'

let reverseArray = function (input) {
  if (!Array.isArray(input)) {
    return false;
  }
  else {
    let result = [];
    for (let index = input.length - 1; index >= 0; index--) {
      result.push(input[index]);
    }
    return result;
  }
};

module.exports = reverseArray;