function maxChar(str) {
  let tempObj = {};

  for (let char of str) {
    if (tempObj[char] !== undefined) {
      tempObj[char] += 1;
    } else {
      tempObj[char] = 1;
    }
  }

  let maxCount = 0;
  let maxChar = '';

  for (let char in tempObj) {
    if (tempObj[char] > maxCount) {
      maxCount = tempObj[char];
      maxChar = char;
    }
  }

  console.log(maxCount, maxChar);
  return maxCount;
}

//maxChar('Hello Aniket there');

// Anangram two words

function checkAnangram(str1, str2) {
  let objStr1 = getObj(str1);
  let objStr2 = getObj(str2);

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

function getObj(str) {
  let tempObj = {};
  for (let char of str) {
    if (tempObj[char] !== undefined) {
      tempObj[char] += 1;
    } else {
      tempObj[char] = 1;
    }
  }
  console.log(tempObj);
  return tempObj;
}

function checkVowels(str) {
  str = str.toLowerCase();
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }

  return count;
}

console.log(checkVowels('AEIOU'));

//console.log(checkAnangram('study', 'dustyy'));
