const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(ar) {
  var res = 0;
  ar.sort();
  console.log(ar);
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] == ar[i + 1]) {
      i++;
      res++;
    }
  }
  return res;
}

// console.log(sockMerchant(arr));

function checkDuplicatePair(arr) {
  let count = 0;
  arr.sort();

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === arr[j + 1]) {
      count++;
      j++;
    }
  }

  console.log(count);
}

checkDuplicatePair([10, 20, 20, 10, 10, 30, 50, 10, 20]);
