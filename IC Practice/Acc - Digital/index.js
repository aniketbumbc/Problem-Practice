// Longest Sequeces of Unique charater
function longSequ(str) {
  let position = 0;
  let uniqueStr = '';
  let currentStr = '';
  let char = '';

  for (let i = 0; i < str.length; i++) {
    char = str[i];
    position = currentStr.indexOf(char);
    if (position !== -1) {
      uniqueStr = currentStr;
      currentStr = currentStr.substr(position + 1);
    }
    currentStr += char;
  }

  if (!uniqueStr.length) {
    uniqueStr = currentStr;
  }

  return uniqueStr;
}

//console.log(longSequ('hello there'));

/**
 *  Count unique value in array
 */

function countUniqueValues(arr) {
  let tempObj = {};
  let count = 0;

  for (let value of arr) {
    if (tempObj[value] === undefined) {
      tempObj[value] = 1;
    } else {
      tempObj[value] += 1;
    }
  }

  for (val in tempObj) {
    if (tempObj[val] === 1) {
      count++;
    }
  }

  console.log(count);
}

//countUniqueValues([2, 4, 5, 3, 44, 55, 55, 44]);

/**
 *  Search smaller string in larger string
 *
 */

function searchStr(largStr, smallStr) {
  let tempObj = {};
  let count = 0;
  let findStr = '';
  let longStr = largStr.split(' ');

  for (str of longStr) {
    if (tempObj[str] === undefined) {
      tempObj[str] = 1;
    } else {
      tempObj[str] += 1;
    }
  }

  for (temStr in tempObj) {
    if (temStr === smallStr) {
      count = tempObj[temStr];
      findStr = temStr;
    }
  }

  console.log([count, findStr]);
}

//searchStr('bunny is going college with bunny college is college', 'is');

/**
 *  Find Max and Min Number in to array
 */

function findMaxMin(arr) {
  let max = 0;
  let min = 0;

  if (arr.length === 1) {
    max = arr[0];
    min = arr[0];
  }

  if (arr[0] > arr[1]) {
    min = arr[1];
    max = arr[0];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  console.log('max =', max, 'min =', min);
}

//findMaxMin([1, 2, 3, 4, 5, 6, 3, 6, 0, 120]);

/**
 *  Binary seach
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
  } else {
    return null;
  }
}
console.log(binarySearch([1, 3, 4, 5, 23, 25, 42], 23));

/**
 *  Missing Number in array
 */

function missingNum(arr) {
  let n = arr.length;
  let total = Math.floor(((n + 1) * (n + 2)) / 2);

  console.log(total);

  for (let i = 0; i < arr.length; i++) {
    total = total - arr[i];
  }
  console.log(total);
}

//missingNum([1, 2, 4, 5, 6]);

/**
 *  reverse string
 */

function reves(str) {
  let rev = '';

  for (let char of str) {
    rev = char + rev;
  }

  console.log(rev);
}

//reves('aniker');

/**
 *  Reverse Number
 */

function reverNo(num) {
  let reves = 0;
  while (num) {
    temp = num % 10;
    reves = reves * 10 + temp;
    num = Math.floor(num / 10);
  }

  console.log(reves);
}

//reverNo(234);

function setTimeTest(num) {
  for (let i = 0; i <= num; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

//setTimeTest(10);

function setTimeFun(num) {
  for (var i = 0; i < num; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}

// setTimeFun(5);

// Factorial Number

function facto(num) {
  if (num === 1) {
    return 1;
  }

  return facto(num - 1) * num;
}

//console.log(facto(4));

//fibonacci Series

function fiboSeries(num) {
  if (num <= 2) {
    return 1;
  }

  return fiboSeries(num - 1) + fiboSeries(num - 2);
}

//console.log(fiboSeries(10));

/**
 *  Sort Array
 */

let numberSeries = [1, 3, 4, 5, 6, 6, 20, 121, 3434, 64];

//console.log(numberSeries.sort((a, b) => a - b));

//console.log(numberSeries.sort((a, b) => b - a));

let getData = new Promise((reslove, reject) => {
  let temp = false;
  if (temp) {
    reslove('Hello Promoise Reslove');
  } else {
    reject('No.. Reject Promise');
  }
})
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

function curr(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

//console.log(curr(23)(40)(50));

//IIFE

var getInfo = 'This is information';
(function getInfo() {
  var getInfo = ' Inside IIFE';
  let numberSeries = [3, 5, 4, 5];
  //console.log(numberSeries);

  //console.log(getInfo);
})();

let student = {
  name: 'Bunny',
  class: 'Internet-things',
  address: {
    city: 'Baltimore',
    country: 'USA',
  },
};

//console.log(student);

const student1 = Object.assign(student, {});
student1.name = 'Mike';
student1.address.city = 'Florida';

const studet2 = JSON.parse(JSON.stringify(student));

studet2.address.city = 'Pune';

studet2.address.country = 'Ind';

//console.log(studet2);
//console.log('student ', student);

Array.prototype.display = function () {
  //   let newArry = this;
  console.log(this);
};

//[33, 54, 232, 545].display();

//Prime Number

function checkPrime(num) {
  let isPrime = true;

  if (num <= 2) {
    return isPrime;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

//console.log(checkPrime(12));

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

// fizzBuzz(30);

function fizzBuz(num) {
  Array.from(new Array(num), function (value, index) {
    index++;

    if (index % 5 === 0 || index % 3 === 0) {
      if (index % 5 === 0) return 'fizz';
      if (index % 3 === 0) return 'buzz';
      return 'fizzbuzz';
    }
    return index;
  }).map((value) => console.log(value));
}

//fizzBuz(30);

/**
 *  Anangram
 */

function checkAnangram(str1, str2) {
  let obj1 = frequencyCheck(str1);
  let obj2 = frequencyCheck(str2);

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let char in obj1) {
    if (obj1[char] !== obj2[char]) {
      return false;
    }
  }

  return true;
}

function frequencyCheck(str) {
  let temp = {};
  for (let char of str) {
    if (temp[char] === undefined) {
      temp[char] = 1;
    } else {
      temp[char] += 1;
    }
  }
  return temp;
}

console.log(checkAnangram('lever', 'level'));

const city = {
  name: 'pune',
  country: 'India',
};

function display(...arg) {
  console.log(this.name, ' ', this.country, arg);
}

display.apply(city, [343, 'ere']);
