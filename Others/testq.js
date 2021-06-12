//multiply(5)(6);

function multiply(a) {
  return (b) => {
    return a * b;
  };
}

multiply(5)(6);

// let obj = {
//   x: 1,

//   getX() {
//     function inner() {
//       console.log(this.x);
//     }

//     inner();
//   },
// };

// let test = obj.getX();

// obj.inner.bind(obj);

function abc() {
  try {
    throw new Error();
  } catch (x) {
    var x = 1;
    y = 2;
    console.log(x); // only for this block
  }
  console.log(x); // hoisted at top which undefined
  console.log(y);
}

abc();

var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl();

var h = 21000;
function boy() {
  console.log('dd', h);
  var h = 1000;
}
boy();

var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    var c = 30;
    console.log(b);
  }
  inner();
  console.log(b);
}
outer();

let obj = {
  a: 1,
  b: 2,
  c: {
    age: 30,
  },
};

var objclone = Object.assign({}, obj);
console.log('objclone: ', objclone);
obj.c.age = 45;

function foo() {
  console.log(1);
}

//alert(foo()); // what will this alert?

foo();

function foo() {
  console.log(2);
}

for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  })(i);
}
