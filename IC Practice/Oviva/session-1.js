/**
 *  Valid parenthesis
 */

const isValid = (str) => {
  const obj = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack = [];

  for (let char of str) {
    if (char.match(/^[0-9a-z]+$/)) {
      str = str.replace(char, ' ');
    }
  }

  const newStr = str.replaceAll(' ', '');

  console.log(newStr);

  for (const char of newStr) {
    if (obj.hasOwnProperty(char)) {
      stack.push(char);
    } else {
      const removeChar = stack.pop();
      if (char !== obj[removeChar]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

const isValidParenthesis = (str) => {
  const obj = {
    '{': '}',
    '(': ')',
    '[': ']',
  };

  const stack = [];
  for (char of str) {
    if (char.match(/^[0-9a-z]+$/)) {
      str = str.replace(char, ' ');
    }
  }
  const newStr = str.replaceAll(' ', '');
  for (const char of newStr) {
    if (obj.hasOwnProperty(char)) {
      stack.push(char);
    } else {
      const removeChar = stack.pop();
      if (char !== obj[removeChar]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// console.log(isValidParenthesis('[()]{}{[()(fgfgfsdfg5454)]()fdfdfd}'));
// console.log(isValidParenthesis('[5a(]'));

//First unique charactor in the string

function uniqueChar(str) {
  let tempObj = {};

  for (let char of str) {
    if (tempObj[char] === undefined) {
      tempObj[char] = 1;
    } else {
      tempObj[char] += 1;
    }
  }

  for (let char of str) {
    if (tempObj[char] === 1) {
      return [char, str.indexOf(char)];
    }
  }

  return -1;
}

//console.log(uniqueChar('aabb'));

// find second largest element in array

let numArr = [12, 35, 1, 10, 34, 1];

const secondLargeEle = () => {
  const maxElement = Math.max(...numArr);
  numArr = numArr.filter((num) => num !== maxElement);
  return Math.max(...numArr);
};

//console.log(secondLargeEle());

// reverse string

function revStr(str) {
  let revString = '';
  for (let char of str) {
    revString = char + revString;
  }
  console.log(revString);
}

revStr('aniket');

// reverse number

function reversNum(num) {
  let num2 = 0;
  let reverNum = 0;

  while (num) {
    num2 = num % 10;
    reverNum = reverNum * 10 + num2;
    num = Math.floor(num / 10);
  }
  console.log(reverNum);
}

reversNum(123456);

//count number of vowels in string

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  console.log(count);
}

//countVowels('Pneumonoultramicroscopicsilicovolcanoconiosis');

//curring

function curry(a, b) {
  if (b === undefined) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  } else {
    return a + b;
  }
}

// console.log(curry(2)(4)(3));

// console.log(curry(10, 34));

// // sort array

// console.log(numArr.sort((a, b) => a - b));
// console.log(numArr.sort((a, b) => b - a));

//factorial number

function facto(num) {
  if (num === 1) {
    return num;
  }

  return num * facto(num - 1);
}

//console.log(facto(5));

function printSecond(num) {
  for (let i = 1; i <= num; i++) {
    setTimeout(() => {
      // console.log(i);
    }, 1000 * i);
  }
}

//printSecond(10);

// set Timeout using var

function printSecondV(num) {
  for (var i = 1; i <= num; i++) {
    (function (i) {
      setTimeout(() => {
        //console.log(i);
      }, 1000 * i);
    })(i);
  }
}

// printSecondV(10);

function findMaxMin(arr) {
  let max = 0;
  let min = 0;

  if (arr.length === 1) {
    max = arr[0];
    min = arr[0];
  }

  max = arr[1];
  min = arr[0];

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  //  console.log('max:---', max, 'min:-----', min);
}

// findMaxMin([1, 2, 3, 4, 5, 6, 3, 6, -22, 120]);

// Anagram string

function isAnangram(str1, str2) {
  let objStr1 = countChar(str1);
  let objStr2 = countChar(str2);

  if (Object.keys(objStr1).length !== Object.keys(objStr2).length) {
    return false;
  }

  for (const char in objStr1) {
    if (objStr1[char] !== objStr2[char]) {
      return false;
    }
  }

  return true;
}

function countChar(str) {
  let tempObj = {};
  for (const char of str) {
    if (tempObj[char] !== undefined) {
      tempObj[char] += 1;
    } else {
      tempObj[char] = 1;
    }
  }
  return tempObj;
}

console.log(isAnangram('lvel', 'levlr'));

// fibo series

function fiboSeries(num) {
  let num1 = 0;
  let num2 = 1;
  let nextTerm = 0;

  for (let i = 1; i < num; i++) {
    nextTerm = num1 + num2;
    num1 = num2;
    num2 = nextTerm;
  }
  console.log(nextTerm);
}

//fiboSeries(12);

/**
 *  Fizz Buzz
 */

function fizzBuzz(num) {
  Array.from(new Array(num), (value, index) => {
    index++;
    if (index % 5 === 0 || index % 3 === 0) {
      if (index % 5 !== 0) return 'Fizz';
      if (index % 3 !== 0) return 'Buzz';
      return 'Fizz Buzz';
    }
    return index;
  }).map((value) => console.log(value));
}

//fizzBuzz(45);

// find missing number

function findMissNumber(arr) {
  let currentTotal = 0;
  for (let ele of arr) {
    currentTotal += ele;
  }
  let newTotal = Math.floor(((arr.length + 1) * (arr.length + 2)) / 2);

  return newTotal - currentTotal;
}

//console.log(findMissNumber([1, 2, 4, 6, 3, 7, 8]));

/**
 *  Search smaller string in large string
 */

function findStr(longStr, smlStr) {
  let tempObj = {};

  for (const char of longStr.split(' ')) {
    if (tempObj[char] !== undefined) {
      tempObj[char] += 1;
    } else {
      tempObj[char] = 1;
    }
  }

  for (const char in tempObj) {
    if (char === smlStr) {
      return [char, tempObj[char]];
    }
  }
}

console.log(
  findStr('bunny is going college with bunny college is college', 'is')
);

/**
 *  long sequence unique characters
 */

function longSequ(str) {
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

  console.log(uniqueString);
}

//longSequ('hello there');

//Prime number

function isPrime(num) {
  let prime = true;

  if (num < 2) {
    return null;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
      return prime;
    }
  }

  return prime;
}

// for (var i = 0; i < 100; i++) {
//   if (isPrime(i)) console.log(i);
// }

// const isPromise = new Promise((resolve, reject) => {
//   let temp = false;

//   if (temp) {
//     resolve('Yahooo');
//   } else {
//     reject('no Yahoo');
//   }
// });

// isPromise
//   .then((value) => console.log(value))
//   .catch((err) => console.log('err', err));

/**
 *  Map data types
 */

const myMap = new Map();

myMap.set(0, 'bunny');
myMap.set(1, 'Kapil');

myMap.set(2, 'Gaju');

myMap.set(3, 'Omi');

console.log(myMap);

for (let value of myMap.values()) {
  //console.log(value);
}

myMap.set(10, 'set new bun');

for (let [key, value] of myMap) {
  console.log(`${key} == ${value}`);
}

console.log(myMap.get(10));
console.log('has', myMap.has(10));
console.log(myMap.size);

const obj = {
  '(': ')',
  '{': '}',
  '[': ']',
};

console.log(Object.entries(obj).length);
