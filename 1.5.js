function findAnnagram(str1, str2) {
  const charOccr1 = findOccurance(str1);
  const charOccr2 = findOccurance(str2);

  if (Object.keys(charOccr2).length !== Object.keys(charOccr1).length) {
    return false;
  }

  for (let char in charOccr1) {
    if (charOccr1[char] !== charOccr2[char]) {
      return false;
    }
  }

  return true;
}

function findOccurance(str) {
  let tempObj = {};

  for (let char of str) {
    if (tempObj[char] === undefined) {
      tempObj[char] = 1;
    } else {
      tempObj[char] += 1;
    }
  }
  return tempObj;
}

console.log(findAnnagram('helloe', 'eollhe'));

//

// const str = 'Hello A Htere ';
// let newObj = {};

// for (let ele of str) {
//   if (newObj[ele] !== undefined) {
//     newObj[ele]++;
//   } else {
//     newObj[ele] = 1;
//   }
// }

// console.log(newObj);

// function findAnnagram(str1, str2) {
//   let splStr = str1.split('');
//   let splStr2 = str2.split('');

//   splStr.sort();
//   splStr2.sort();
//   if (splStr2.join('') === splStr.join()) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let numArr = [1, 3, 4, 5, 2];

// function chunckArr(numArr, chunkSize) {
//   let startSize = 0;
//   let finalChunk = [];
//   while (startSize < numArr.length) {
//     let newChunk = [];
//     newChunk = numArr.slice(startSize, chunkSize);
//     numArr.splice(startSize, chunkSize);
//     finalChunk = [...finalChunk, newChunk];
//   }

//   console.log(finalChunk);
// }

// chunckArr(numArr, 2);

// finalChunk.push(numArr.slice(startSize, startSize + chunkSize));
//startSize += chunkSize;
