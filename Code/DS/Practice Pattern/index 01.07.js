/**
 *  Binary search
 *
 */

function search(arr, searchValue) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let currentEle = arr[mid];

    if (arr[mid] < searchValue) {
      min = mid + 1;
    } else if (arr[mid] > searchValue) {
      max = mid - 1;
    } else {
      return [mid, currentEle];
    }
  }

  return -1;
}

let getResult = search([1, 2, 3, 4, 5, 6], 4);
console.log(getResult);

// All negative on one side

function allNegative(arr) {
  let i = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < 0) {
      if (j != i) {
        let temp;
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
      i++;
    }
  }
  console.log(arr);
}
allNegative([-3, 4, -1, 32, -3, 5, -2, 22, -1]);
