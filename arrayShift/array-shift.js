'use strict';

let array = ['cookie','cookie'];
let value = 'cream';

let reverseArray = (array, value) => {
  let middleIndex = Math.round(array.length /2); //5
  console.log('The middle index is ', middleIndex);

  let array2 = [];

  for (let index = 0 ; index < middleIndex; index++) { //start at index [0 (1)] //repeat as long as index less than [5 (6)] //go up an index
    let current = array[index];
    console.log('The current value pointed at:', current);
    array2[index] = current;
    console.log('placing ', current, 'at index', array2[index]);
  }
  array2[array2.length] = value;
  for (let index = middleIndex; index < array.length; index++) {
    array2[array[index]] = array[index];
  }
  return array2; 
};

console.log(reverseArray(array, value));

module.exports = reverseArray;

