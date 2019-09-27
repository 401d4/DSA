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
    if(typeof value !== 'number') { //MAKING SURE THE INPUT IS A NUMBER
      return console.error(value,'is not a valid input');
    }
    else if(this.top !== null) {
      let newNode = new Node(value); //CREATE NEW NODE
      newNode.pointer = this.top; //ASSIGN THE OLD TOP THIS THIS NODES POINTER VALUE
      this.top = newNode; //THIS NODE IS NOW ASSIGNED TOP
      this.stack.push(newNode); //STICK IT ON TOP
      return console.log(newNode.value,'is now the top!');
    }
    else {
      let newNode = new Node(value); //CREATE NEW NODE
      this.top = newNode; //THIS NODE IS NOW ASSIGNED TOP
      this.stack.push(newNode); //STICK IT ON TOP
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