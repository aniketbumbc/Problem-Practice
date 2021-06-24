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
  console.log(uniqueArr.length);
}

countUniqueValue([1, 2, 3, 3, 4, 4, 5]);
