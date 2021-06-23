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

// console.log();

checkFreq([1, 3, 4], [14, 9, 1]);
