'use strict';

class Node {
  constructor(value, pointer) {
    this.value = value,
    this.pointer = null;
  }
}

class Stack {
  constructor() {
    this.stack = [];
    this.top = null;
  }

  push(value) {
    if(typeof value !== 'number') {
      return console.error(value,'is not a valid input');
    }
    else if(this.top !== null) {
      let newNode = new Node(value);
      newNode.pointer = this.top;
      this.top = newNode;
      this.stack.push(newNode);
      return console.log(newNode.value,'is now the top!');
    }
    else {
      let newNode = new Node(value);
      this.top = newNode;
      this.stack.push(newNode);
      return console.log(newNode.value,'is the top!');
    }
  }

  pop(){
    if(this.top === null) {
      return console.error('there is nothing left to pop');
    }
    else {
      let removedValue = this.top.value;
      this.top = this.top.pointer;
      this.stack.pop();
      return removedValue;
    }
  }

  peak(){
    if(this.top === null) {
      return console.error('there is nothing in the stack to peak');
    }
    else {
      return this.top;
    }
  }
}

module.exports = Stack;