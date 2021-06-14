/** Call Bind and Apply  */

const student = {
  name: 'Bunny',
  class: ' MSMQ-3',
  method: function () {
    function getData() {
      console.log(this.name);
      console.log(this.class);
    }
    getData.call(this);
  },
};

function studentInfo(...args) {
  console.log(this.name, this.class, args[0], args[1]);
}

function studentDetails() {
  console.log('bind', this.name, this.class);
}

/** studentInfo.call(student, 'Goa', 'Goa');
studentInfo.apply(student, ['Goa', 'Goa']);
studentDetails.bind(student)();

student.method(); */

/** Set Time Out */

function counter(num) {
  for (let i = 0; i <= num; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
//counter(10);

function counterOne(num) {
  for (var i = 0; i <= num; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}
// counterOne(10);

/** Sort Array */

const score = [1, 5, 9, 11, 3, 0, 7, 6, 65, 88, 100];
const scoreRev = [5, 100, 120, 355, 77, 8, 9, 10];
let test = scoreRev.reverse();

// console.log(test.sort((a, b) => a - b));

const ascending = score.sort((a, b) => a - b);
const descending = scoreRev.sort((a, b) => b - a);

// console.log(ascending);
// console.log(descending);

/** constructor function */

function CounterValue() {
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

let counterScore = new CounterValue();
// counterScore.increment();
// counterScore.increment();
// counterScore.increment();
// counterScore.decrement();
// counterScore.increment();
// counterScore.decrement();

/** IIFE*/

function testIife() {
  (function () {
    {
      let i = 'let';
      var v = 'var';
    }
  })();

  console.log(v);
  console.log(i);
}

//testIife();

/**Promise */

let checkPromise = new Promise((resolve, reject) => {
  let isPromise = false;

  if (isPromise) {
    setTimeout(() => {
      resolve('Yes Promise Fullfill');
    }, 2000);
  } else {
    reject('noooooo');
  }
})
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

/**  Prototype inheritance */

Array.prototype.print = function () {
  console.log(this);
};

//score.print();

const groups = ['a', 'b', 'c', 'd'];
// groups.reverse();
// groups.print();

/**  closure */

function outer() {
  let outer = 'outer';
  function inner() {
    let inner = 'inner';
    function deepInner() {
      console.log(inner, outer);
    }
    deepInner();
  }
  inner();
}
outer();

/**  curring */

function a(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a * b * c * d;
      };
    };
  };
}

let result = a(10)(2)(3)(4);

console.log(result);
