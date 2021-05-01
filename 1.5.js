let numArr = [1, 3, 4, 5, 2];

function chunckArr(numArr, chunkSize) {
  let startSize = 0;
  let finalChunk = [];
  while (startSize < numArr.length) {
    let newChunk = [];
    newChunk = numArr.slice(startSize, chunkSize);
    numArr.splice(startSize, chunkSize);
    finalChunk = [...finalChunk, newChunk];
  }

  console.log(finalChunk);
}

chunckArr(numArr, 2);

// finalChunk.push(numArr.slice(startSize, startSize + chunkSize));
//startSize += chunkSize;
