/**
 *  Count unique Values
 */

function countUniqueValue(arr) {
  let obj = {};
  let uniqueArr = [];

  arr.forEach((ele) => {
    if (obj[ele] === undefined) {
      obj[ele] = 1;
    } else {
      obj[ele] += 1;
    }
  });

  for (key in obj) {
    if (obj[key] === 1) {
      uniqueArr.push(key);
    }
  }

  return uniqueArr.length;
  //   console.log(uniqueArr.length);
}

countUniqueValue([1, 2, 3, 3, 4, 4, 5]);

/**
 *  Sliding window
 */

function maxSubArry(arr, num) {
  let maxNum = 0;
  let tempNum = 0;
  if (arr.length === 0) {
    return null;
  }

  for (let i = 0; i < num; i++) {
    maxNum += arr[i];
  }
  tempNum = maxNum;
  for (let j = num; j < arr.length; j++) {
    tempNum = tempNum - arr[j - num] + arr[j];
    maxNum = Math.max(maxNum, tempNum);
  }

  // console.log(maxNum);
}

maxSubArry([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

/**
 *  Find K smallest element into array
 *
 */

function findSmallEle(arr, num) {
  arr.sort((a, b) => a - b);
  return arr[num - 1];
}

let value = findSmallEle([1, 0, 4, 4, 5], 5);

console.log(value);
