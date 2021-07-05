//  Product of array

function productArray(arr) {
  if (arr.length === 0) {
    return null;
  }

  const result = arr.reduce((prev, curr) => prev * curr);
}

productArray([1, 2, 3, 10]);

// recursive way to product array

function prouctRecursive(arr) {
  console.log(arr);
  if (arr.length === 0) {
    return 1;
  }

  return arr[0] * prouctRecursive(arr.slice(1));
}

console.log(prouctRecursive([1, 2, 3, 4, 5, 6]));
