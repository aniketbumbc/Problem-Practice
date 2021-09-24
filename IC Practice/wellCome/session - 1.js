// console.log('test');

const { async } = require('rxjs');

// // function hello() {
// //   setTimeout(function () {
// //     console.log('hello');
// //     console.log(this.name);
// //   }, 100);
// // }
// // hello.call({ name: 'tom' });

// // // function hello1() {
// // //   setTimeout(() => {
// // //     console.log(this.name); // -> `tom` will be logged.
// // //   }, 100);
// // // }
// // // hello.call({ name: 'tom' });

// // function Person(name) {
// //   this.name = name;
// // }
// // Person.prototype = function getName() {
// //   return this.name;
// // };

// // Person.prototype.getName = function getName() {
// //   return this.name;
// // };

// // const tom = new Person('Tom');
// // console.log(tom.getName());

// ('use strict');
// const user = {
//   id: 551,
//   name: 'Tom',
//   getId() {
//     return this.id;
//   },
//   credentials: {
//     id: 120,
//     username: 'tom',
//     getId() {
//       return this.id;
//     },
//   },
// };

// const getId = user.credentials.getId;
// console.log(getId());

// console.log(user.getId());
// console.log(user.credentials.getId());

// // const getId = user.credentials.getId;

// // console.log(getId());

// // ('use strict');

// // function hello() {
// //   setTimeout(() => {
// //     console.log(this.name);
// //   }, 100);
// // }
// // hello.call({ name: 'tom' });

// // class Person {
// //   constructor(name) {
// //     this.name = name;
// //   }
// //   hello() {
// //     return 'hello ' + this.name;
// //   }
// // }

// // class Developer extends Person {
// //   constructor(name, title) {
// //     super(name);
// //     this.title = title;
// //   }
// //   getTitle() {
// //     return this.title;
// //   }
// // }

// // function Person(name) {
// //   this.name = name;
// // }

// // Person.prototype.hello = function hello() {
// //   return 'hello ' + this.name;
// // };

// // function Developer(name, title) {
// //   Person.call(this, name);
// //   this.title = title;
// // }

// const a = () => {};
// function B() {}

// // console.log(typeof a);
// // console.log(typeof B);
// // console.log(Object.getPrototypeOf(a));
// // console.log(Object.getPrototypeOf(B));
// // console.log(a.prototype);
// // console.log(B.prototype);

// //var team = 'a';

// // var callTeam = function () {
// //   console.log('our team', team);

// //   let team = 'b';
// //   console.log('yours team', team);
// // };

// // callTeam();

// function Foo() {
//   console.log(this);
// }
// var food = { a: 'Magical this' };

// Foo.call(food);

// const euros = [29.76, 41.85, 46.5];

// const sum = euros.reduce((total, amount) => {
//   //   console.log(total, amount);
//   return total + amount;
// });

// console.log(sum);

const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, 'one');
});
const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 2000, 'two');
});

// Promise.all([firstPromise, secondPromise]).then((res) => console.log(res));
// Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));

function checkData() {
  return Promise.resolve('Yahoo Make It');
}

let data = checkData();

// console.log(data.then((res) => console.log(res)));

// console.log(Promise.resolve(43).then((res) => console.log(res)));

// const promise1 = Promise.resolve('Frist');
// const promise2 = Promise.resolve('second');
// const promise3 = Promise.resolve('Thrid');
// const promise4 = Promise.resolve('Fourth');

// const runPromise = async () => {
//   const res1 = await Promise.all([promise1, promise2]);
//   const res2 = await Promise.all([promise3, promise4]);

//   return { res1, res2 };
// };

// runPromise().then((res) => console.log(res));

function Person(name, city) {
  this.name = name;
  this.city = city;
}

Person.prototype.getData = function () {
  console.log(this.name, this.city);
};

let p1 = new Person('ndf', 'Er');

// p1.getData();

Array.prototype.display = function () {
  console.log(this.toString());
};

let numberArr = [1, 34, 55, 31, 343];

numberArr.display();

// console.log(numberArr);

// function getInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }

// const person = 'Kiran';
// const occ = 'engineer';

// getInfo`${person} is working as ${occ}`;

// const personM = {
//   name: 'Kiran',
//   hobbies: ['Playing'],
// };

// function addMong(hobby, hobbies = personM.hobbies) {
//   hobbies.push(hobby);
//   console.log(arguments[1]);
//   return hobbies;
// }

// console.log(addMong('running', []));
// // console.log(addMong('dancing'));
// // console.log(addMong('loving', person.hobbies));

// let x = {
//   a: 1,
//   b: 2,
// };

// console.log(Object.entries(x));

// function convertArr(x) {
//   let values = [];
//   for (let value in x) {
//     values.push(x[value]);
//   }

//   console.log(values);
// }

// convertArr(x);

const obj = {
  a: {
    b: {
      c: 1,
    },
  },
};

console.log('obj', Object.keys(obj).length);
const newObj = { ...obj };

const cloneObje = JSON.parse(JSON.stringify(obj));

// newObj.a.b.c = 10;
cloneObje.a.b.c = 1000;

console.log(obj);

console.log(newObj);

console.log(cloneObje);

const a = [1, 3, 53, 55];
const b = [5457, 752, 2, 1];

const c = [...a, ...b];

console.log(c.sort((a, b) => a - b));

// Find unique charcters in string  char and index

function uniqueChar(str) {
  let obj = {};

  for (let char of str) {
    if (obj[char] === undefined) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
  }

  for (let char in obj) {
    if (obj[char] === 1) {
      let indexChar = str.indexOf(char);
      return { char, indexChar };
    }
  }

  return -1;
}

console.log(uniqueChar('aacccccf'));
