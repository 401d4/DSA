'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.pointsTo = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.totalNodes = 0;
  }

  addNode(value){
    let node = new Node(value);
    let current;

    if (this.head == null) this.head = node;

    else {
      current = this.head;
      while (current.pointsTo) current = current.pointsTo;
      current.pointsTo = node;
    }

    this.totalNodes++;
  }

  includes(value) 
  { 
    let current = this.head; 
    
    while (current != null) { 
      if (current.value === value) 
        return true; 
      current = current.pointsTo; 
    } 
    return false; 
  } 
  toString() 
  { 
    let current = this.head; 
    var string = ''; 
    while (current) { 
      string += current.value + ' '; 
      current = current.pointsTo; 
    } 
    return string; 
  }
}

module.exports = LinkedList;