/**
 *  Searchin Pattern JS
 * Linear Search
 */

function linearSearch(arr, searchValue) {
  for (let value of arr) {
    if (value === searchValue) {
      return arr.indexOf(searchValue);
    }
  }
  return -1;
}

//console.log(linearSearch([1, 3, 4, 5, 29, 23, 43], 3));

/**
 *  Binary Search
 */

function binarySearch(arr, searchValue) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (arr[mid] !== searchValue && start <= end) {
    if (searchValue < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }

  if (arr[mid] === searchValue) {
    return mid;
  }
  return -1;
}

console.log(binarySearch([1, 3, 4, 5, 23, 25, 42], 5));

function bsearch(arr, ele) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== ele && start <= end) {
    ele < arr[mid] ? (end = mid - 1) : (start = mid + 1);
    mid = Math.floor((start + end) / 2);
  }

  return arr[mid] === ele ? mid : -1;
}

console.log(bsearch([1, 3, 4, 5, 23, 25, 42], 53));
