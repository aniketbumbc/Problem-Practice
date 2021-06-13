var map1 = new Map([
  [1, 3],
  [3, 4],
  [5, 3],
]);

var map2 = new Map([
  ['firstname', 'sumit'],
  ['lastname', 'ghosh'],
  ['website', 'geeksforgeeks'],
]);

console.log('Map - 1', map1);

console.log('Map - 2', map2);

console.log(map2.size);

var days = new Map();

days.set(1, 'Monday');
days.set(2, 'Tuesday');
days.set(3, 'Wednesday');

console.log(days);

console.log(days.get(3));
console.log(days.keys());
console.log(days.values());
console.log(map2.entries());

map2.forEach((values, keys) => console.log(keys, values));

var getit = map2[Symbol.iterator]();

for (const item of getit) {
  console.log(item);
}

const obja = {};
let c = '';
let d = 0;

const objb = { num: 1 };
const objMain = {};
// const c = 'Key-C';

// objMain[obja] = 'bunny';
// objMain[objb] = 'Bugs';

const map = new Map();

map.set(obja, 'a');
map.set(objb, 'b');
map.set(c, 'bunny');
map.set(d, 3434);

console.log(map.entries());
map.forEach((keys, values) => console.log(keys, values));
