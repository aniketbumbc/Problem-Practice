/**
 *  Search smaller string in larger string
 *
 */

function searchPattern(longStr, patternStr) {
  let count = 0;

  for (let i = 0; i <= longStr.length; i++) {
    for (let j = 0; j <= patternStr.length; j++) {
      if (patternStr[j] !== longStr[i + j]) {
        break;
      }

      if (j === patternStr.length - 1) {
        count++;
      }
    }
  }

  return count;
}

console.log(searchPattern('bunny is going college with bunny', 'bunny'));
