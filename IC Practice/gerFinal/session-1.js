//Binary Serarch 1

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

  return null;
}
//console.log(binarySearch([1, 3, 4, 5, 23, 25, 42], 12));

/**
 *  Search smaller string in larger string.
 */

function searchStr(longStr, smlStr) {
  let tempObj = {};
  let temLongStr = longStr.split(' ');

  for (let str of temLongStr) {
    if (tempObj[str] !== undefined) {
      tempObj[str] += 1;
    } else {
      tempObj[str] = 1;
    }
  }

  for (const str in tempObj) {
    if (str === smlStr) {
      return [smlStr, tempObj[smlStr]];
    }
  }
}

console.log(
  searchStr('bunny is going college with bunny college is college', 'is')
);

// revers number

function reverNo(number) {
  let result = 0;
  let temp = 0;

  while (number) {
    temp = number % 10;
    result = result * 10 + temp;
    number = Math.floor(number / 10);
  }

  console.log(result);
}

reverNo(0987654321);

//reverse string

function revStr(str) {
  let reveString = '';

  for (let char of str) {
    reveString = char + reveString;
  }
  console.log(reveString);
}

//revStr('aniket');

/**
 *  Find Max and Min Number in to array
 */

function findMaxMin(arr) {
  ``;
  let max = 0;
  let min = 0;

  if (arr.length === 1) {
    max = arr[0];
    min = arr[0];
  }

  max = arr[1];
  min = arr[0];

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log('max:---', max, 'min:-----', min);
}
//findMaxMin([1, 2, 3, 4, 5, 6, 3, 6, -22, 120]);

/**
 * Longest sequence of unique charactors
 */

function longSequeChar(str) {
  let currentStr = '';
  let longSequ = '';
  let char = '';
  let position = 0;

  for (let i = 0; i < str.length; i++) {
    char = str[i];
    position = currentStr.indexOf(char);

    if (position !== -1) {
      longSequ = currentStr;
      currentStr = currentStr.substr(position + 1);
    }
    currentStr += char;
  }

  if (!longSequ.length) {
    longSequ = currentStr;
  }

  console.log(longSequ);
}

longSequeChar('hello there');

/**
 * Count Unique values in array
 */

function uniqueValue(arr) {
  let tempObj = {};
  let count = 0;
  let values = [];

  for (let val of arr) {
    if (tempObj[val]) {
      tempObj[val] += 1;
    } else {
      tempObj[val] = 1;
    }
  }

  for (let key in tempObj) {
    if (tempObj[key] === 1) {
      count++;
      values.push(key);
    }
  }

  console.log([values, count]);
}

//uniqueValue([2, 4, 5, 3, 44, 55, 55, 44]);

function findMaxChar(str) {
  let tempString = str.split('');
  let tempObj = {};
  let maxCount = 0;
  let maxStr = '';
  for (let char of tempString) {
    if (tempObj[char]) {
      tempObj[char] += 1;
    } else {
      tempObj[char] = 1;
    }
  }

  for (let key in tempObj) {
    if (tempObj[key] > maxCount) {
      maxCount = tempObj[key];
      maxStr = key;
    }
  }

  console.log(maxCount, maxStr);
}

//findMaxChar('aniketwillbeingermanyyyyeee');

/*
 * Factorial Number
 */
function facto(num) {
  if (num === 1) {
    return 1;
  }

  return facto(num - 1) * num;
}
//console.log(facto(4));

//find missing number in array

function findMissNo(arr) {
  let n = arr.length;

  let sumNnumber = Math.floor(((n + 1) * (n + 2)) / 2);

  let arrTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    arrTotal += arr[i];
  }
  console.log(sumNnumber - arrTotal);
}

// findMissNo([1, 2, 4, 5, 6]);

/**
 * Find vovelws in string
 */

function findVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  console.log(count);
}

findVowels('euouae');

let getData = new Promise((reslove, reject) => {
  let result = true;
  if (result) {
    reslove('Here promise ');
  } else {
    reject('No it reject');
  }
}).then((value) => console.log(value));

//curring

function curry(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

console.log(curry(2)(4)(5));

var student = 'Aniket';

(function display() {
  var student = 'bunny';
  console.log('inside', student);
})();

const numberArr = [34, 35, 64, 23, 1, 7, 8, 5343, 232, 12];

// console.log(numberArr.sort((a, b) => a - b));
// console.log(numberArr.sort((a, b) => b - a));

//fibo series

function fibo(num) {
  let num1 = 0;
  let num2 = 1;
  let num3;

  for (let i = 3; i <= num; i++) {
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
    console.log(num3);
  }
}
//fibo(10);

function fibRecursive(num) {
  if (num === 1) {
    return 0;
  }

  if (num === 2) {
    return 1;
  }

  return fibRecursive(num - 1) + fibRecursive(num - 2);
}

//console.log(fibRecursive(10));

function sum(x) {
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } else {
    return function (y) {
      return x + y;
    };
  }
}

console.log(sum(2, 3)); // Outputs 5
console.log(sum(2)(3)); // Outputs 5

var d = {};
['zebra', 'horse'].forEach(function (k) {
  d[k] = undefined;
});

//console.log(d);

var x = 21;
var boo = 100;
var girl = function () {
  //console.log(boo);
  var x = 20;
  var boo = 1;
};
//girl();

var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    var b = 300;
    // console.log(b);
  }
  inner();
}
outer();

let obj = {
  a: 1,
  b: 2,
  c: {
    age: 30,
  },
};

let freshObj = JSON.parse(JSON.stringify(obj));

//console.log(freshObj);

obj.c.age = 45;

//console.log(freshObj);
//console.log(obj);

// call bind apply

const studentNew = {
  name: 'aniket',
  class: 'IS620',
};

const developer = {
  name: 'Java',
  class: 12,
};

function showData(...arg1) {
  // console.log(this.name, this.class, arg1);
}

//showData.call(studentNew, 'hello');

showData.apply(studentNew, [1, 3, 4, 1]);

let bindTest = showData.bind(developer, [34, 36, 64])();

// bindTest();

function setTime(num) {
  for (let i = 0; i <= num; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
// setTime(5);

function setTimeFun(num) {
  for (var i = 0; i <= num; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}

//setTimeFun(8);

function fizzBuzz(num) {
  Array.from(new Array(num), function (ele, index) {
    index++;

    if (index % 5 === 0 || index % 3 === 0) {
      if (index % 5 !== 0) return 'Fizz';
      if (index % 3 !== 0) return 'Buzz';
      return 'Fizz Buzz';
    }
    return index;
  }).map((value) => console.log(value));
}
//fizzBuzz(30);

const animal = {};
let dog = { name: 'buuny' };
let cat = { name: 'yahiii' };

// animal[dog] = { ...dog, name: 'mike' };
// animal[cat] = { ...cat, name: 'sata' };

animal[dog] = 'doggi';
animal[cat] = 'stat';
console.log(animal);

function cb() {
  setTimeout(() => {
    console.log('Hello from callback ');
  }, 2000);
}

function callCB(cb) {
  console.log('enter into callCb');
  cb();
}

callCB(cb);
