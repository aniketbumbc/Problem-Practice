console.log(x);
var x = 23;

var number = [1, 4, 5, 3, 5];
var num = number;
num.push(34);
console.log(number, num);
//[1, 4, 5, 3, 5,34] [1, 4, 5, 3, 5,34]

var str = 'A' + 'B' + +'.' + 'B'.toLocaleLowerCase();

console.log(str);

var a = 10;

{
  {
    {
      var a = 30;
    }
  }
}

{
  var a = 100;
}

console.log(a);

let isCheck = undefined === null;
console.log(isCheck);

// function display() {
//   var x = 10;
// }
// display();
// alert(x);
