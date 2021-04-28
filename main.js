// const reverse = (str) => {
//   let revsStr = '';
//   if (str.length > 1) {
//     revsStr = str.split('').reverse();
//   }
//   return revsStr.join('');
// };

const reverse = (str) => {
  let revs = '';

  for (let char of str) {
    revs = char + revs;
  }
  return revs;
};

console.log(reverse('abc'));
