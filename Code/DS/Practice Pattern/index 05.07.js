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
  //   console.log(arr);
  if (arr.length === 0) {
    return 1;
  }

  return arr[0] * prouctRecursive(arr.slice(1));
}

// console.log(prouctRecursive([1, 2, 3, 4, 5, 6]));

// recursive way to for range

function recursiveRange(num) {
  if (num === 0) {
    return 0;
  }

  return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(10));

// fibo series

function fiboSeries(n) {
  if (n <= 2) {
    return 1;
  }
  return fiboSeries(n - 1) + fiboSeries(n - 2);
}

console.log(fiboSeries(8));
