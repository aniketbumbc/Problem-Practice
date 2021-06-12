console.log('Async Await');

console.log('p1 : show ticket');
console.log('p2 : show ticket');

const promiseTicket = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Ticket');
  }, 3000);
});

const getPopcorn = promiseTicket.then((t) => {
  console.log('I bought popcorn');
  return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getIceCream = getPopcorn.then((t) => {
  console.log('I bought Icecream');
  return new Promise((res, rej) => res(`${t} icecream`));
});

getIceCream.then((t) => console.log(t));

console.log('p4 : show ticket');
console.log('p5 : show ticket');
