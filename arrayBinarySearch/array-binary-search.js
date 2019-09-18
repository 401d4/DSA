'use strict';


let binarySearch = (array,key) => { 
  let middle = Math.floor(array.length/2);
  let left = 0;
  let right = array.length -1;

  while(key !== array[middle]) {
    // console.log('the middle is ', middle);
    // console.log('the left is ', left);
    // console.log('the right is ', right);
    if (left === right && right === middle) {
      return -1;
    }
    else if (key < array[middle] && key >= left)  {
      // console.log('less than');
      right = middle;
      middle = Math.floor((right-left)/2 + left); //(4 - 0)/2 + 0 = 3
    }
    else if (key > array[middle] && key <= right) {
      // console.log('greater than');
      left = middle;
      middle = Math.ceil((right-left)/2 + left);
    }
  }
  console.log('Ive been reached the middle is', middle);
  return middle;
};

module.exports = binarySearch;