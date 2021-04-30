//https://jsonplaceholder.typicode.com/posts

const timeOut = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completed in ${t}`);
    }, t);
  });
};

/* timeOut(1000).then(result => console.log(result)); */

Promise.all([timeOut(3000), timeOut(500)]).then((result) =>
  console.log(result)
);

function callbackFunction(name) {
  console.log('Hello ' + name);
}

function outerFunction(callback) {
  let name = prompt('Please enter your name.');
  callback(name);
}

outerFunction(callbackFunction);
let arrayIntegers = [1, 2, 3, 4, 5];

let arrayIntegers2 = arrayIntegers.slice(2, 3);

console.log(arrayIntegers2);

function outerFunction(name) {
  console.log('hello ' + name);
}

function inside(cb) {
  console.log('bunny');
  cb('aniket');
}

inside(outerFunction);
/* 
outerFuction */

/* 
const outerFun =  (name) => {
console.log("Outer Fun" , name)
}


const insideFun = (cb) =>{
outerFun("Niket");
}

setTimeout(insideFun,4000); */
