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
