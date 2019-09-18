'use strict';

let binarySearch = (array,key) => {
  for (let index = 0; index < array.length; index++) {
    console.log('the key is ',key,' the index value is ',array[index]);
    if (key === array[index]) {return index;}
    else {continue;}
  }
  return -1;
};

module.exports = binarySearch;


let array = [1,5,10,15,20,25,30,35];
let key = 20;

binarySearch(array,key);