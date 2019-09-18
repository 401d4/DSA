'use strict';

let reverseArray = require('./array-reverse');

describe('Array Reversal', () => {
  it.skip('should return false for non-arrays', () => {
    let nonArray = 'hello';

    expect(reverseArray(nonArray).toBeFalsy());
  });

  it.skip('should return the array reversed', () => {
    let array = [1,21,69,58];

    expect(reverseArray(array).toEqual([58,9,21,1]));
  });
});