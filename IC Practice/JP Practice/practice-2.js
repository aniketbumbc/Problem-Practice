// Closure

var globalScope = 'Global Scope';
function outer() {
  var abc = 'outer';
  function inner() {
    var pqr = 'inner';
    console.log(abc);
    console.log(globalScope);
  }
  inner();
}

outer();

//curring

function x(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}

const result = x(10)(3)(4);

// console.log(result);

//Promise

let promise = new Promise((resolve, reject) => {
  let isConnection = false;

  if (isConnection) {
    resolve('Connection establish');
  } else {
    reject('No Connection');
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Reverse string

function revString(str) {
  let revs = '';
  for (let char of str) {
    revs = char + revs;
  }
  return revs;
}

// console.log(revString('aniket'));

//set Timout every one sec up to

function counter(num) {
  for (let i = 1; i <= num; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

// counter(10);

function reveNumber(num) {
  let result = 0;
  let digit = 0;
  while (num) {
    digit = num % 10;
    result = result * 10 + digit;
    num = (num / 10) | 0;
  }
  return result;
}

// console.log(reveNumber(321));

// count vowels in string

function countVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
console.log(countVowels('aeiou'));

//max character in string

function findMaxChar(str) {
  let charObj = {};
  let count = 0;
  let maxChar = '';

  for (let char of str) {
    if (charObj[char] === undefined) {
      charObj[char] = 1;
    } else {
      charObj[char] += 1;
    }
  }

  for (let char in charObj) {
    if (charObj[char] > count) {
      count = charObj[char];
      maxChar = char;
    }
  }

  return [charObj, maxChar, count];
}

console.log(findMaxChar('aniket bhavsar amsterdam'));

// anangram

function checkAnangram(str1, str2) {
  let charObj = checkFrequency(str1);
  let charObj2 = checkFrequency(str2);

  if (Object.keys(charObj).length !== Object.keys(charObj2).length) {
    return false;
  }

  for (let char in charObj) {
    if (charObj[char] !== charObj2[char]) {
      return false;
    }
  }

  return true;
}

function checkFrequency(str) {
  let charObj = {};
  for (let char of str) {
    if (charObj[char] === undefined) {
      charObj[char] = 1;
    } else {
      charObj[char] += 1;
    }
  }

  return charObj;
}

console.log(checkAnangram('leveld', 'leveldsss'));

// Prime number

function isPrime(number) {
  let isPrime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

// console.log(isPrime(3));

// fibo serires

function fiboSeries(num) {
  let nextCount = 0;
  let tempNum = 0;
  let tempNum2 = 1;

  for (let i = 0; i <= num; i++) {
    nextCount = tempNum + tempNum2;
    tempNum = tempNum2;
    tempNum2 = nextCount;
  }

  return tempNum2;
}

console.log(fiboSeries(10));

//Factorial number
function facto(num) {
  if (num === 1) {
    return num;
  }
  return num * facto(num - 1);
}

console.log(facto(5));
