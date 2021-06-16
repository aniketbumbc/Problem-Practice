// find factorial of given number

function facto(num) {
  if (num === 1) {
    return 1;
  }
  return num * facto(num - 1);
}

//console.log(facto(5));

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

//fizzBuzz(2);

function isPrimeNumber(num) {
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${num} is a prime number`);
  } else {
    console.log(`${num} is a not prime number`);
  }
}
// isPrimeNumber(23);
// isPrimeNumber(3);
// isPrimeNumber(5);
// isPrimeNumber(12);
// isPrimeNumber(1);
// isPrimeNumber(0);

function fiboSeries(num) {
  let n1 = 0;
  let n2 = 1;
  let nextTerm = 0;

  for (let i = 1; i <= num; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return nextTerm;
}

console.log(fiboSeries(10));
