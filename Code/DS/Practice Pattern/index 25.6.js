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

/** Multiple Pointers */

function sumZero(arr) {
  let i = 0; //-3

  while (i < arr.length) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== 0 && arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
    i++;
  }
}

const sumZeroValue = sumZero([-3, -2, -1, 0, 1, 14]);

console.log(sumZeroValue);

/** Average Pair */

function avgPair(arr, pair) {
  if (!arr.length) {
    return false;
  }
  let isPair = false;
  let i = 0;
  while (i < arr.length) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] / 2 === pair) {
        isPair = true;
      }
    }

    return isPair;
  }
}

console.log(avgPair([1, 0, 3, 4, 5, 6], 4.1));
