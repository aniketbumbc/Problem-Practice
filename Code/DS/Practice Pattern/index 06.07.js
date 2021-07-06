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

console.log(flattenArr([1, 2, 3, [4, 5], [[[23, 44]]]]));

//console.log(flattenArr([1, 2, 3, [4, 5], [23, 44]]));
