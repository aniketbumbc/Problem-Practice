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
