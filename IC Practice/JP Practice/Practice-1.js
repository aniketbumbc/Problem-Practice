/**
 *  Reverse String
 */

function reversString(str) {
  let revers = '';
  for (let char of str) {
    revers = char + revers;
  }
  return revers;
  //  return str.split('').reverse().join();
}

// console.log(reversString('Aniket'));

/**
 * Reverse Number
 */

function revNumber(number) {
  let result = 0;
  let digit = 0;
  while (number) {
    digit = number % 10;
    result = result * 10 + digit;
    number = (number / 10) | 0;
  }
  return result;
}
// console.log(revNumber(1234));

/**
 *  Palindrome
 */

function checkPalindrome(str) {
  str = str.toLowerCase();
  let revs = '';
  for (let char of str) {
    revs = char + revs;
  }

  if (revs === str) {
    return true;
  }

  return false;
}

// console.log(checkPalindrome('Kayak'));

/**
 *  Find Vowels in string
 */

function findVowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
// console.log(findVowel('configured'));

/**
 *  Find Max charater in string
 */

function findMaxChar(str) {
  let charObj = {};
  let maxCount = 0;
  let maxChar = '';
  for (let char of str) {
    if (charObj[char] === undefined) {
      charObj[char] = 1;
    } else {
      charObj[char] += 1;
    }
  }

  for (let char in charObj) {
    if (charObj[char] > maxCount) {
      maxCount = charObj[char];
      maxChar = char;
    }
    return [maxCount, maxChar];
  }
}

// console.log(findMaxChar('ccccbbaa'));

/**
 *  Anangram find anangram in two words
 */

function findAnagram(str1, str2) {
  let objStr1 = countFreq(str1);
  let objStr2 = countFreq(str2);

  if (Object.keys(objStr1).length !== Object.keys(objStr2).length) {
    return false;
  }

  for (let char in objStr1) {
    if (objStr1[char] !== objStr2[char]) {
      return false;
    }
  }
  return true;
}

function countFreq(str) {
  let objChar = {};

  for (let char of str) {
    if (objChar[char] === undefined) {
      objChar[char] = 1;
    } else {
      objChar[char] += 1;
    }
  }
  return objChar;
}

// console.log(findAnagram('elbow', 'below'));

/**
 *  Prime Number
 */

function isPrime(num) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

// console.log(isPrime(7));

/**
 * Fibo series
 */

function fiboSeries(num) {
  let n1 = 0;
  let n2 = 1;
  let nextTerm = 0;

  for (let i = 0; i <= num; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return nextTerm;
}

// console.log(fiboSeries(3));

/**
 * Fizz Buzz
 *
 */

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzzzz');
    } else if (i % 3 === 0) {
      console.log('Fizzzz');
    } else {
      console.log(i);
    }
  }
}

// console.log(fizzBuzz(30));

/**
 * Factorial
 */

function facto(num) {
  if (num === 1) {
    return 1;
  }
  return num * facto(num - 1);
}

console.log(facto(5));
