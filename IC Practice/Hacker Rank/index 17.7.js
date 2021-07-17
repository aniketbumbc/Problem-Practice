function repeatedStr(str, n) {
  let count = 0;
  let strLength = str.length;

  for (const value of str) {
    if (value === 'a') {
      count++;
    }
  }

  //largest multiple which is less than n

  console.log('module', Math.floor(n / strLength));
  console.log('count', count);

  count = Math.floor(n / strLength) * count; // 10 * length largest multiple

  console.log('count after', count);

  for (let i = 0; i < n % strLength; i++) {
    if (str[i] === 'a') {
      count++;
    }
  }
  return count;
}

console.log(repeatedStr('aba', 10));

function countValleys(steps, path) {
  let countValleys = 0;
  let altitude = 0;

  for (let i = 0; i <= path.length; i++) {
    if (path[i] === 'U') {
      altitude++;
      if (altitude === 0) {
        countValleys++;
      }
    } else {
      altitude--;
    }
  }

  console.log(countValleys);
}

countValleys(8, 'DUDDUUUUDDD');
