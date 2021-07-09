// count unique values in arry

function countUinqeValues(arr) {
  let obj = {};
  const uniqueValues = [];

  arr.forEach((ele) => {
    if (obj[ele] === undefined) {
      obj[ele] = 1;
    } else {
      obj[ele] += 1;
    }
  });

  for (key in obj) {
    if (obj[key] === 1) {
      uniqueValues.push(obj[key]);
    }
  }
  console.log(uniqueValues.length);
}

//countUinqeValues([2, 4, 5, 3, 44, 55, 55, 44]);

/**
 * Longests sequeces unique
 */

function longSeque(str) {
  let positon = 0;
  let currentString = '';
  let uniqueString = '';
  let char = '';

  for (let i = 0; i < str.length; i++) {
    char = str.charAt(i);
    positon = currentString.indexOf(char);
    if (positon !== -1) {
      uniqueString = currentString;
      currentString = currentString.substr(positon + 1);
    }
    currentString += char;
  }

  if (!uniqueString.length) {
    uniqueString = currentString;
  }

  console.log(uniqueString);
}

//longSeque('hello there how are zou');

function seachSmallStr(longStr, smallStr) {
  let count = 0;

  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j <= smallStr.length; j++) {
      if (smallStr[j] !== longStr[i + j]) {
        break;
      }

      if (j === smallStr.length) {
        count++;
      }
    }
  }

  console.log(count);
}
seachSmallStr('bunny is going college with bunny', 'bunny');
