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

chunckArry([1, 2, 3, 4, 5], 2);
