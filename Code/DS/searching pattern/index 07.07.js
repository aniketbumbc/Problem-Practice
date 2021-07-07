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

console.log(linearSearch([1, 3, 4, 5, 29, 23, 43], 3));
