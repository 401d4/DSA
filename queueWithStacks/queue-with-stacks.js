'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues');


class PseudoQueue {
  constructor() {
    this.stack1 = new Stack(),
    this.stack2 = new Stack();
  }

  enqueue (value) {
    this.stack1.push(value);
    console.log(this.stack1);
    return this.stack1;
  }

  dequeue() {
    for (let index = 0; index < this.stack1.stack.length; index++) {
      this.stack2.push(this.stack1.top.value);
      this.stack1.pop();
    }
    this.stack2.pop();
    for (let index = 0; index < this.stack2.stack.length; index++) {
      this.stack1.push(this.stack2.top.value);
      this.stack2.pop();
    }
    console.log(this.stack1);
    return this.stack1;
  }
}

let queue = new PseudoQueue();

queue.enqueue(5); // FRONT
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
queue.enqueue(25);
queue.enqueue(30);
queue.enqueue(35); // BACK

queue.dequeue();
queue.dequeue();
