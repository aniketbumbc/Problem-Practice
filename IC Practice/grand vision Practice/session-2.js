/** Reverse String */

function reversStr(str) {
  let revs = '';
  for (let char of str) {
    revs = char + revs;
  }
  return revs;
}

console.log(reversStr('aniket'));

/** Reverse number */

function reverNum(num) {
  let result = 0;
  let temp = 0;
  while (num > 0) {
    temp = num % 10;
    result = result * 10 + temp;
    num = Math.floor(num / 10);
  }
  return result;
}

function reverNum2(num) {
  let tempNum = num.toString();
  let result = parseInt(tempNum.split('').reverse().join(''));
  return result;
}
// console.log(reverNum(123));
// console.log(reverNum2(4568723));

/** Vowels */

function findVowels(str) {
  let count = 0;
  let stringVowels = [];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
      stringVowels.push(char);
    }
  }

  return [count, stringVowels];
}

// console.log(findVowels(' JavaScript function'));

/** Find unique char in array  */

const garbArray = ['a', 'b', 'c', 'd', 't', 'b', 'c'];
const unique = [...new Set(garbArray)];

// console.log(unique);

/* Factorial Num */

function facto(num) {
  if (num === 1) {
    return 1;
  }

  return num * facto(num - 1);
}

// console.log(facto(5));

/* Prime Number */

function checkPrime(num) {
  let isPrime = true;
  if (num <= 1) {
    return null;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

// console.log(checkPrime(57));

/** Find Missing Number in array  */

function findMissingNo(arr) {
  let n = arr.length;
  let total = Math.floor(((n + 1) * (n + 2)) / 2);
  let missNumber = 0;

  for (let i = 0; i < n; i++) {
    missNumber = total - arr[i];
    total = missNumber;
  }

  return missNumber;
}

// console.log(findMissingNo([1, 2, 4, 5, 6]));

/* Find Words in string */

function maxChar(str) {
  let charObj = {};
  let maxCount = 0;
  let outputChar = '';

  for (let char of str) {
    if (charObj[char] !== undefined) {
      charObj[char] += 1;
    } else {
      charObj[char] = 1;
    }
  }

  for (let char in charObj) {
    if (charObj[char] > maxCount) {
      maxCount = charObj[char];
      outputChar = char;
    }
  }

  return [maxCount, outputChar];
}

console.log(maxChar('apple'));

/** Find Two Words anagram or not */

function checkAnangram(str1, str2) {
  let getObj1 = helperWordFrequency(str1.split(''));
  let getObj2 = helperWordFrequency(str2.split(''));

  if (Object.keys(getObj1).length !== Object.keys(getObj2).length) {
    return false;
  }

  for (let char in getObj1) {
    if (getObj1[char] !== getObj2[char]) {
      return false;
    }
  }

  return true;
}

function helperWordFrequency(str) {
  let tempObj = {};

  for (let char of str) {
    if (tempObj[char] === undefined) {
      tempObj[char] = 1;
    } else {
      tempObj[char] += 1;
    }
  }
  return tempObj;
}

console.log(checkAnangram('abb', 'bbadsds'));
