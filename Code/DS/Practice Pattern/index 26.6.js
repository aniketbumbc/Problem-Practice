/** Longest sequence of unique character */

function longestSequ(str) {
  let max = 0;
  let current_string = '';
  let char = '';
  let position = 0;
  let truncateStr = '';

  for (let i = 0; i < str.length; i++) {
    char = str.charAt(i); // getting each charater
    position = current_string.indexOf(char); // getting charater postion first time all position -1
    if (position !== -1) {
      truncateStr = current_string;
      current_string = current_string.substr(position + 1); // clear current string when repeat charater found
    }
    current_string += char;

    if (max < current_string.length) {
      max = current_string.length;
    }
  }
  if (!truncateStr.length) {
    truncateStr = current_string;
  }
  console.log(max, truncateStr);
}

function uniqueStr(str) {
  let position = 0;
  let uniqueString = '';
  let char = '';
  let current_string = '';

  for (let i = 0; i < str.length; i++) {
    char = str.charAt(i);
    position = current_string.indexOf(char);

    if (position !== -1) {
      uniqueString = current_string;
      current_string = current_string.substr(position + 1);
    }
    current_string += char;
  }

  if (!uniqueString.length) {
    uniqueString = current_string;
  }

  console.log(uniqueString, uniqueString.length);
}

uniqueStr('hello there');
longestSequ('hello there');
