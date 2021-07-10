/**
 *   Count Unique Value In Array
 */

function countUniqueValues(arr) {
  let obj = {};
  let uniqueArr = [];

  arr.forEach((ele) => {
    if (obj[ele] === undefined) {
      obj[ele] = 1;
    } else {
      obj[ele] += 1;
    }
  });

  for (key in obj) {
    if (obj[key] === 1) {
      uniqueArr.push(key);
    }
  }

  return uniqueArr.length;
}

let result = countUniqueValues([1, 3, 4, 5, 2, 3, 2, 55, 33, 55, 35]);
// console.log(result);

/**
 *   Find max and min number into arry
 */

function findMaxMin(arr) {
  let max = 0;
  let min = 0;

  if (arr[0] > arr[1]) {
    max = arr[1];
    min = arr[0];
  }

  for (let j = 2; j <= arr.length; j++) {
    if (arr[j] > max) {
      max = arr[j];
    }

    if (arr[j] < min) {
      min = arr[j];
    }
  }

  console.log('min = ', min, 'max = ', max);
}

findMaxMin([200, 191, 112, -11, 330, 60]);

/**
 *  count pattern matching in longer string
 */

function patternMatch(longStr, shortStr) {
  let count = 0;

  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < shortStr.length; j++) {
      if (shortStr[j] !== longStr[i + j]) {
        break;
      }

      if (j === shortStr.length) {
        count++;
      }
    }
  }

  return count;
}

console.log(patternMatch('bunny is going college with bunny', 'bunny'));

/**
 *  binary search
 */

function binarySearch(arr, searchValue) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== searchValue && start <= end) {
    if (searchValue < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  if (arr[mid] === searchValue) {
    return mid;
  }
  return -1;
}

console.log(binarySearch([1, 3, 4, 5, 23, 25, 42], 5));

/**
 * Longest sequence of unique character
 */

function uniqueStr(str) {
  let position = 0;
  let char = '';
  let currentString = '';
  let uniqueString = '';

  for (let i = 0; i < str.length; i++) {
    char = str.charAt(i);
    position = currentString.indexOf(char);

    if (position !== -1) {
      uniqueString = currentString;
      currentString = currentString.substr(position + 1);
    }
    currentString += char;
  }

  if (!uniqueString.length) {
    uniqueString = currentString;
  }

  // console.log(uniqueString);
}

// uniqueStr('hello there');

/**
 *  Reverse String
 */

function reverseStr(str) {
  let revs = '';
  for (char of str) {
    revs = char + revs;
  }
  // console.log(revs);
}

// reverseStr('hello');

function reverSimple(str) {
  return str.split('').reverse().join('');
}

// console.log(reverSimple('bunny'));

/**
 *  Reverse Number
 */

function revesNumber(num) {
  let result = 0;
  let temp = 0;

  while (num !== 0) {
    temp = num % 10;
    result = result * 10 + temp;
    num = Math.floor(num / 10);
  }

  // console.log(result);
}

// revesNumber(4563);

/**
 *  Max character in string
 */

function findMaxChar(str) {
  str = str.toLowerCase();
  let obj = {};
  let maxChar = '';
  let maxCount = 0;

  for (char of str) {
    if (obj[char] === undefined) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
  }

  for (char in obj) {
    if (obj[char] > maxCount) {
      maxCount = obj[char];
      maxChar = char;
    }
  }

  console.log(maxCount, maxChar);
}

// findMaxChar('Uncommited Msg');

/**
 *  Set Timout
 *
 */

function testSetTimeout(num) {
  for (let i = 1; i <= num; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

//testSetTimeout(10);

function testSetTimeoutFun(num) {
  for (var i = 1; i <= num; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}

// testSetTimeoutFun(10);

/**
 * Curring
 */

function curr(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a * b * c * d;
      };
    };
  };
}

// let valueCurry = curr(2)(4)(5)(4);

// console.log(valueCurry);

function arrCurr(a) {
  return (b) => (c) => (d) => {
    return a * b * c * d;
  };
}

let valueCurry = arrCurr(2)(8)(2)(4);

// console.log(valueCurry);

//clourse

let global = 55;
function outer() {
  let abc = '34';
  function inner() {
    let kbc = '44';
    console.log(abc, kbc, global);
  }
  inner();
}

// outer();

// factorial

function facto(num) {
  if (num === 1) {
    return 1;
  }

  return num * facto(num - 1);
}

// console.log(facto(6));

function checkPrime(num) {
  let isPrime = true;

  if (num === 1) {
    return null;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  console.log(isPrime);
}

checkPrime(3);
checkPrime(30);
checkPrime(17);
checkPrime(35);

// sort arry

let number = [2, 4, 6, 7, 3, 1, 100, 34, 4343];

console.log(number.sort((a, b) => a - b));
console.log(number.sort((a, b) => b - a));

// fiz buzz

function fizzBuzz() {
  Array.from(new Array(45), (value, index) => {
    index++;
    if (index % 5 === 0 || index % 3 === 0) {
      if (index % 5 !== 0) return 'Fizz';
      if (index % 3 !== 0) return 'Buzz';
      return 'FizzBuzz';
    }
    return index;
  }).map((value) => console.log(value));
}

fizzBuzz();
