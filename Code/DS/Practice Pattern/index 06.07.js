// recursive function for flatten array

function flatten(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

//console.log(flatten([1, 2, 3, [4, 5]]));

//Flatten array

function flattenArr(arr) {
  let flattenArry = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArry = flattenArry.concat(flattenArr(arr[i]));
    } else {
      flattenArry.push(arr[i]);
    }
  }
  return flattenArry;
}

//console.log(flattenArr([1, 2, 3, [4, 5], [[[23, 44]]]]));

/**
 * {9, 8, 7, 6, 4, 2, 1, 3}
Output:
3 9 8 7 6 4 2 1
 */

function cycliRotate(arr) {
  let newArr = [];

  newArr.unshift(arr[arr.length - 1]);
  arr.splice(arr.length - 1);
  newArr = [...newArr, ...arr];
  return newArr;
}

console.log(cycliRotate([9, 8, 7, 6, 4, 2, 1, 3]));
