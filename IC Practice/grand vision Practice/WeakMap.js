const weakmap1 = new WeakMap();
let e1 = { ename: 'Kiran' };
const key1 = {};
const key2 = {};
const key3 = {};

weakmap1.set(key1, 233);

weakmap1.set(key2, 233);
weakmap1.set(key3, 34);
console.log(weakmap1.get(key1), weakmap1.get(key2), weakmap1.get(key3));
