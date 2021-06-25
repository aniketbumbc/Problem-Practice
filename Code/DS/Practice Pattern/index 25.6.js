/**
 *  Divied and Conqure Binary Search
 *
 */

function divConqure(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor(min + max / 2);

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

const value = divConqure([1, 2, 4, 5, 10, 303], 1);

console.log(value);
