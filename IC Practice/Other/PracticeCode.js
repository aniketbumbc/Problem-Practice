const myObj = {
  value: 10,
};

Object.seal(myObj);
myObj.value = 30;
delete myObj.value;
// console.log(myObj);

const myObj1 = {
  value: 344,
};

Object.freeze(myObj1);
myObj1.value = 111;

// console.log(myObj1);

let testArc = [1, 2, 3, 4, 5];
console.dir(testArc);

let testTest = [3, 5, 6, 3, 2, 2, 1, 5];
const uniqueTest = new Set(testTest);

console.log(uniqueTest);

let iterator = testArc[Symbol.iterator]();

console.log(iterator.next());

function* generatorFun() {
  yield 1;
  yield 2;
  yield 3;
  yield 5;
}

let iteratorFun = generatorFun();

console.log(iteratorFun.next());

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = generator();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
