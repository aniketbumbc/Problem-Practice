// const reverse = (str) => {
//   let revsStr = '';
//   if (str.length > 1) {
//     revsStr = str.split('').reverse();
//   }
//   return revsStr.join('');
// };

// const reverse = (str) => {
//   return str.split('').reduce((rev, char) => char + rev, '');
// };

function maxChar(str) {
  let charObj = {};
  let maxNum = 0;
  let maxChar = '';

  for (let char of str) {
    if (!charObj[char]) {
      charObj[char] = 1;
    } else {
      charObj[char]++;
    }
  }

  for (let char in charObj) {
    if (charObj[char] > maxNum) {
      (maxNum = charObj[char]), (maxChar = char);
    }
  }
  return maxChar + ' ' + maxNum;
}
//maxChar('Hellloe');
console.log(maxChar('Hello there aniket'));
