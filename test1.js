// str1 race
// str2 care  {c:1,a:1,r:1,e:}

// length
// same frequency char

// str1 raace
// str2 care

function isAnagram(str1, str2) {
  if (str1.length > 1 && str2.length > 1) {
    let str1Array = str1.split(' '); // ['r','a','a','c','e']

    for (let char of str2) {
      if (str1Array.includes(char)) {
        return true;
      } else {
        return false;
      }
    }
  }
}

// Method return frequency of string
//{c:1,a:1,r:1,e:1}

function checkFequency(str) {
  let charObj = {};
  for (let char of str) {
    if (charObj[char] === undefined) {
      charObj[char] = 1;
    } else {
      charObj[char] + 1;
    }
  }
  return charObj;
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

node_6;
node_new_insert;

let current;

current = node_6;

while (current.next) {
  current = current.next;
}
current.next = node_new_insert;
