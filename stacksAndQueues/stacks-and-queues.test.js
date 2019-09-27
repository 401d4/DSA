'use strict';

const Stack = require('./stacks-and-queues');

describe('Stack', () => {

  it('should be able to push a value', () => {
    let dishes = new Stack();

    expect(dishes.top).toBe(null);

    dishes.push(80);

    expect(dishes.top).toEqual({ 'pointer': null, 'value': 80 });

    dishes.push(72);

    expect(dishes.top.value).toEqual(72);
  });

  it('should be able to return top node with a peak()', () => {
    let dishes = new Stack();

    expect(dishes.top).toBe(null);

    dishes.push(80);

    expect(dishes.top).toEqual({ 'pointer': null, 'value': 80 });

    dishes.push(72);

    expect(dishes.peak()).toEqual(dishes.top);
  });
});

