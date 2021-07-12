import 'regenerator-runtime/runtime';
const delay = require('delay');

// Async and await

console.log('test');

async function getInfoData() {
  let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const movies = await data.json();
  console.log('Before ', movies);
  await delay(5000);
  return movies;
}

getInfoData().then((value) => console.log(value));
