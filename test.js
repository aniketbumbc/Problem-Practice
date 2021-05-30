console.log(aVar); // undefined
console.log(aLet); // causes ReferenceError: aLet is not defined
var aVar = 1;
let aLet = 2;

function outer() {
  var a = 10;
  var b = 20;

  function inner() {
    var c = 43;

    console.log(b, aLet);
  }

  inner();
}

outer();

function add(a) {
  return (b) => {
    return (c) => {
      return (d) => {
        return a + b + c + d;
      };
    };
  };
}

const result = add(1)(2)(3)(4);
console.log(result);

var student = function (name) {
  this.name = name;
};

student.prototype.getName = function () {
  return this.name;
};

var stud = new student('Aniket');
var stud1 = new student('Bunny');

console.log(stud.getName());
console.log(stud1.getName());

let promise = new Promise((resolve, reject) => {
  let connection = false;
  if (connection) {
    resolve('connection solve');
  } else {
    reject('connection reject');
  }
});

promise
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.log(error);
  });
