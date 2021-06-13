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
sayWorld();

function sayHello() {
  console.log('Hello');
}

const sayWorld = () => {
  console.log('World');
};
