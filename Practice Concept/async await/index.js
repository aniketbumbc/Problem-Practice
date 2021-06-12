import 'regenerator-runtime/runtime';

console.log('Async Await');

console.log('p1 : show ticket');
console.log('p2 : show ticket');

const preMovie = async () => {
  const promiseTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ticket');
    }, 5000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
  const iceCreamPromise = new Promise((res, rej) => res(`icecream`));

  let ticket = await promiseTicket;
  let popcorn = await getPopcorn;
  let iceCream = await iceCreamPromise;
  console.log('Here itsss ' + ticket);
  console.log('I bought ' + popcorn);
  console.log('I Cold ' + iceCream);

  return ticket;
};

preMovie().then((msg) => console.log(`person 4 shows ${msg}`));

console.log('p4 : show ticket');
console.log('p5 : show ticket');

/**
 * const promiseTicket = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Ticket');
  }, 3000);
});

const getPopcorn = promiseTicket.then((t) => {
  console.log('I bought popcorn');
  return 
});

const getIceCream = getPopcorn.then((t) => {
  console.log('I bought Icecream');
  return 
});

getIceCream.then((t) => console.log(t));
 */
