class Stack {
  constructor() {
    this.stack = [];
  }

  insertEle(value) {
    this.stack.push(value);
    return this.stack;
  }

  removeEle() {
    this.stack.pop();
    return this.stack;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  checkLength() {
    return this.stack.length;
  }

  peackValue(indexPosition) {
    return this.stack[indexPosition];
  }
}

let s1 = new Stack();
console.log(s1.insertEle('Apple'));
console.log(s1.insertEle('Mango'));
console.log(s1.insertEle('Pine'));
console.log(s1.insertEle('pine-apple'));
console.log('Pop', s1.removeEle());
console.log(s1.checkLength());
console.log(s1.peackValue(2));

class Queue {
  constructor() {
    this.queue = [];
  }

  enQueue(value) {
    this.queue.push(value);
    return this.queue;
  }

  deQueue() {
    this.queue.shift();
    return this.queue;
  }
}

let q1 = new Queue();
console.log(q1.enQueue('Apple'));
console.log(q1.enQueue('Mac'));
console.log(q1.enQueue('Dell'));
console.log(q1.deQueue());
