const myObj = {
  value: 10,
};

Object.seal(myObj);
myObj.value = 30;
delete myObj.value;
// console.log(myObj);

const myObj1 = {
  value: 344,
};

Object.freeze(myObj1);
myObj1.value = 111;

console.log(myObj1);
