'use strict';

let binarySearch = require('./array-binary-search');

describe('Binary Search', () => {
  it('given an array, return index of matched key', () => {
    let array = [1,5,10,15,20,25,30,35];
    let key = 20;

    expect(binarySearch(array,key)).toBe(4);
  });

  it('given an array, return -1 if key is not found', () => {
    let array = [1,5,10,15,20,25,30,35];
    let key = 21;

    expect(binarySearch(array,key)).toBe(-1);
  });
});