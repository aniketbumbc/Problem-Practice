/**
 *  Count unique Values
 */

function countUniqueValue(arr) {
  const uniqueArr = [];
  let i = 0;
  for (let j = 1; j <= arr.length; j++) {
    if (arr[i] !== arr[j]) {
      uniqueArr.push(arr[i]);
    }
    i++;
  }
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

  console.log(maxNum);
}

maxSubArry([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
