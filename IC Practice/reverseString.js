function reveserString(str) {
  let revs = '';
  for (let char of str) {
    revs = char + revs;
  }
  return revs;
}

function reveserString2(str) {
  let splitStr = str.split('');
  let reverseStr = splitStr.reverse().join('');
  return reverseStr;
}

function reverseNumber(num) {
  let numString = num.toString();
  return parseInt(numString.split('').reverse().join(''));
}

function reveNum(num) {
  let result = 0;
  let digit = 0;
  while (num) {
    digit = num % 10;
    result = result * 10 + digit;
    num = (num / 10) | 0;
  }
  return result;
}

function getPalindrome(str1) {
  let revs = '';
  for (let char of str1) {
    revs = char + revs;
  }
  if (revs === str1) {
    console.log(revs);
    return true;
  } else {
    console.log(revs);
    return false;
  }
}

// console.log(reveNum(2232000));
// console.log(reveserString2('mike'));
//console.log(getPalindrome('refer'));
