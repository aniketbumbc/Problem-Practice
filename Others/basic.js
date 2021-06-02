let strOne = '             Please locate where  occurs';

// console.log(strOne.search('where'));

// console.log(strOne.slice(4, 8));

console.log(strOne);

console.log(strOne.trim());

const numArray = [1, 3, 5, 53, 55];

const stringArray = ['a', 'b', 'c', 'd'];

const value = numArray.reduce((acc, curr) => (acc + curr) / numArray.length);

console.log(numArray.filter((value) => value < 10));

console.log(value);

const student = {
  name: 'John Doe',
  age: 16,
  scores: {
    maths: 74,
    english: 63,
    science: 85,
  },
};

const { maths, english, science } = student.scores;

console.log(maths, english, science);

function addtion(...num) {
  let add = 0;
  for (let number of num) {
    add = number + add;
  }
  console.log(add);
}

addtion(10, 454);
addtion(343, 43);
