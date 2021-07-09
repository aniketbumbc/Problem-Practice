/**
 *   Count Unique Value In Array
 */

function countUniqueValues(arr) {
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
}

let result = countUniqueValues([1, 3, 4, 5, 2, 3, 2, 55, 33, 55, 35]);

console.log(result);
