// stack

class Stack {
  stack = [];
  constructor() {
    this.stack = [];
  }

  insertInto(value) {
    this.stack.push(value);
    return this.stack;
  }

  removeValue() {
    this.stack.pop();
    return this.stack;
  }

  isEmpty() {
    return this.stack.length === 0;
  }
  getLength() {
    return this.stack.length;
  }

  peekStackValue() {
    return this.stack[this.stack.length - 1];
  }
}

// let s1 = new Stack();
// console.log(s1.getLength());
// console.log(s1.insertInto('Apple'));
// console.log(s1.insertInto('Apple-1'));
// console.log(s1.insertInto('Apple-2'));
// console.log(s1.removeValue());
// console.log(s1.insertInto('Apple-10'));
// console.log(s1.isEmpty());
// console.log(s1.peekStackValue());
// console.log(s1.getLength());

class Queue {
  queue = [];
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
    return this.queue;
  }

  dequeue() {
    this.queue.shift();
    return this.queue;
  }

  peekValue() {
    return this.queue[0];
  }
}

let q1 = new Queue();

console.log(q1.enqueue('Apple-1'));
console.log(q1.enqueue('Apple-2'));
console.log(q1.enqueue('Apple-3'));
console.log(q1.enqueue('Apple-4'));
console.log(q1.dequeue());
