/**   Closure */
function mostOuter() {
  let outerMost = 'Hello Outer Most';
  function outer() {
    var c = 100;
    let outer = ' this is outer call';
    function inner() {
      let innerCall = ' Inner Call';
      console.log(outer, innerCall, ' ', outerMost, c);
    }
    inner();
  }
  outer();
}

var c = 900;
mostOuter();

function HigherCounter() {
  let count = 100;
  this.increment = function () {
    count++;
    console.log(count);
  };

  this.decrement = function () {
    count--;
    console.log(count);
  };
}

let callCounter = new HigherCounter();
callCounter.increment();
callCounter.increment();
callCounter.increment();
callCounter.increment();
callCounter.decrement();

/** Prototype inheritance */

let schoolClass = function (classNumber) {
  this.number = classNumber;
};

schoolClass.prototype.getStudent = function () {
  return this.number;
};

let HSC = new schoolClass(2000);
let SSC = new schoolClass(440);

console.log(HSC.getStudent(), SSC.getStudent());

/* Sort Array */

const arryNum = [66, 44, 22, 1, 5, 34, 6, 0];
const arryNum2 = [66, 44, 22, 1, 5, 34, 6, 0];

console.log(
  'descending ',
  arryNum.sort((a, b) => a - b)
);

console.log(
  'ascednig ',
  arryNum.sort((a, b) => b - a)
);

sayHello();
// sayWorld();

function sayHello() {
  console.log('Hello');
}

const sayWorld = () => {
  console.log('World');
};

function y() {
  console.log(this.length);
}

var objx = {
  length: 5,
  method: function (y) {
    arguments[0](); // gives how many arguments you pass to function (gets number how many argumetnts)
  },
};

var objY = {
  length: 10,
};

// var newTest = y.bind(objY);
// newTest();
objx.method(y);

let obj = {
  x: 1,
  getX() {
    const newthis = this;
    function inner() {
      console.log(newthis.x);
    }
    inner();
  },
};

obj.getX();

console.log('mike'.__proto__.__proto__.__proto__);

function getArguments(...args) {
  return args.length;
}

console.log(getArguments(3, 4, 3, 5, 3, 5, 2));

var numArr = [3, 4, 3, 5, 3, 5, 2];
var getResult = [...new Set(numArr)];

console.log(getResult);

let fun = function () {
  (function () {
    let l = 'let';
    var v = 'var';
  })();

  console.log(v);
  console.log(l);
};

fun();
