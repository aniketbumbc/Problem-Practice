// const reverse = (str) => {
//   let revsStr = '';
//   if (str.length > 1) {
//     revsStr = str.split('').reverse();
//   }
//   return revsStr.join('');
// };

const reverse = (str) => {
  return str.split('').reduce((rev, char) => char + rev, '');
};

console.log(reverse('abc'));
