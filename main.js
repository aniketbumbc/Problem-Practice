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

// function maxChar(str) {
//   let charObj = {};
//   let maxNum = 0;
//   let maxChar = '';

//   for (let char of str) {
//     if (!charObj[char]) {
//       charObj[char] = 1;
//     } else {
//       charObj[char]++;
//     }
//   }

//   for (let char in charObj) {
//     if (charObj[char] > maxNum) {
//       (maxNum = charObj[char]), (maxChar = char);
//     }
//   }
//   return maxChar + ' ' + maxNum;
// }
// //maxChar('Hellloe');
// console.log(maxChar('Hello there'));

//Fizz buzz problem

const fizzbuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
};

fizzbuzz(15);
