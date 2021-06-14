/**
 *  Object into array
 */

let obj = {
  a: 1,
  b: 3,
  c: 33,
};

function convertToArr(obj) {
  let objArr = [];

  for (let key in obj) {
    objArr.push(obj[key]);
  }

  return objArr;
}

// console.log(Object.entries(obj));
// console.log(convertToArr(obj));

const newObj = {
  a: 1,
  b: 3,
  getA() {
    console.log(this.a);
    return this;
  },
  getB() {
    console.log(this.b);
  },
};

newObj.getA().getB();

Array.prototype.print = function () {
  let newArry = new String(this);
  console.log(parseInt(newArry.split('')));
};

var abc = [2, 3, 4];

abc.print();

const cloneObje = {
  a: {
    b: {
      c: 1,
    },
  },
};

console.log(cloneObje);

const newClone = JSON.parse(JSON.stringify(cloneObje)); // deep clone object
newClone.a.b.c = 10;
console.log('newClone ', newClone);

let oldobj = {
  x: 1,
  getX() {
    // const newthis = this;
    function inner() {
      console.log(this.x);
    }
    inner.bind(this)();
  },
};

oldobj.getX();

function oldAdd(a, b) {
  return a + b;
}

function add(a) {
  return function (b) {
    return a + b;
  };
}

console.log(oldAdd(34, 44));

console.log(add(333)(44));

// const numMissArry = [1,3,4,5];

// const len =
