function chunckArry(array, size) {
  let startSize = 0;
  let finalChunk = [];
  while (startSize < array.length) {
    finalChunk.push(array.slice(startSize, startSize + size));
    startSize += size;
  }
  console.log(finalChunk);
  return finalChunk;
}

//chunckArry([1, 2, 3, 4, 5], 2);

// function findUniqueValue(arr) {
//   let uniqueCount = 0;
//   let i = 0;
//   for (let j = i + 1; j <= arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       uniqueCount++;
//       i++;
//     } else {
//       break;
//     }
//     console.log(uniqueCount);
//   }
// }

function findUniqueValue(arr) {
  let i = 0;
  for (let j = 1; j <= arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
    }
    arr[i] = arr[j];
  }

  console.log(i + 1);
}

findUniqueValue([1, 1, 2, 2, 3]);
