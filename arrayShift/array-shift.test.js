'use strict';

let arrayShift = require('./array-shift');

describe('Array Shift', () => {
  it('When given an array with an even amount of values, insert given value into middle', () => {
    var array = [1,2,3,4];
    var value = 50;

    expect(arrayShift(array, value)).toEqual([1,2,50,3,4]);
  });

  it('When given an array with an odd amount of values, insert given value right of the middle value', () => {
    var array = [1,2,3,4,5];
    var value = 50;

    expect(arrayShift(array, value)).toEqual([1,2,3,50,4,5]);
  });
  
  it('Works the same with strings', () => {
    var array = ['cookie','cookie'];
    var value = 'cream';

    expect(arrayShift(array, value)).toEqual(['cookie','cream','cookie']);
  });
});