import 'regenerator-runtime/runtime';

console.log('Function Generator');

function* generatorDemo() {
  console.log('Generator Call');
  yield 'Maggie';
  yield 8;
  yield 10;
  yield 23;
}

const genrator1 = new generatorDemo(); // return object

console.log(genrator1.next());
console.log(genrator1.next());
console.log(genrator1.next());
console.log(genrator1.next());

for (let obj of generatorDemo()) {
  console.log(obj);
}
