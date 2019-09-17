'use strict'

const reverseArray = require('./array-reverse');

describe('Array Reversal', () => {
  it('should return false for non-arrays', () => {
    let nonArray = 'hello'

    expect(reverseArray(nonArray))
      .toBeFalsy();
  });

  it('should return new empty array given []', () => {
    let array = [];

    let result = reverseArray(array);

    expect(result)
      .toEqual([]);
    expect(result).not.toBe(array);
  });

  it('should return the array reversed', () => {
    let array = [1,21,69,58];

    let result = reverseArray(array);

    expect(result)
      .toEqual([58,69,21,1]);
    expect(result).not.toBe(array);
  });
});