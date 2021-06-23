/** Check Frequency Same of array squre */

function checkFreq(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let squre = arr1[i] * arr1[i];
    let index = arr2.indexOf(squre);

    if (index === -1) {
      return false;
    }

    arr2.splice(index, 1);
  }

  return true;
}

// New Technique

function isCheckFrequency(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (let value of arr1) {
    if (obj1[value] === undefined) {
      obj1[value] = 1;
    } else {
      obj1[value] += 1;
    }
  }

  for (let value of arr2) {
    if (obj2[value] === undefined) {
      obj2[value] = 1;
    } else {
      obj2[value] += 1;
    }
  }

  for (let value in obj1) {
    if (!(value ** 2 in obj2)) {
      return false;
    }

    let squre = value * value;
    if (obj2[squre] !== obj1[value]) {
      return false;
    }
  }

  return true;
}

console.log(isCheckFrequency([1, 3, 4, 3], [16, 9, 1, 9]));
