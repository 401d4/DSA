'use strict';

let LinkedList = require('./linked-list');

describe('Linked List', () => {

  it('should create new list', () => {
    let list = new LinkedList();

    expect(list).toBeDefined();
  });

  it('should be able to add a new node as head', () => {
    let list = new LinkedList();

    expect(list.head).toBe(null);

    list.addNode(5);

    expect(list.head.value).toBe(5);
    expect(list.head.pointsTo).toBe(null);
  });

  it('should search a list and return true or false based on if the node is found', () => {
    let list = new LinkedList();

    list.addNode(5);
    list.addNode(12);
    list.addNode(26);
    list.addNode(84);
    list.addNode(45);
    list.addNode(3);
  
    expect(list.includes(12)).toBe(true);
    expect(list.includes(100)).toBe(false);
  });
});