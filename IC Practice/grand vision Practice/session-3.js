let student = {
  name: 'aniket',
  age: 23,
};

function print(city, state, country) {
  console.log(this.age);
  console.log(this.name);
  console.log(city, ' ', state, ' ', country);
}

// let newBind = print.bind(student, 'NYC')();

Function.prototype.myBind = function (...args) {
  let context = this;
  let params = args.slice(1);

  return function (...innerArgs) {
    context.apply(args[0], [...innerArgs, ...params]);
  };
};

// let newBind2 = print.myBind(student, 'nyc', 'USA');
// newBind2('Canada');

let ground = {
  scoreBoard: '4343',
  billBoard: 'Pepsi',
  pavilion: {
    name: 'east',
    area: 'north',
  },
};

function seeScore(match, country) {
  console.log('SCORE ', this.scoreBoard);
  console.log('ADD ', this.billBoard);
  console.log('MATCH TYPE ', match, '  ', country);
}

//let display = seeScore.bind(ground)();

Function.prototype.cutomBind = function (...agrs) {
  let context = this;
  let prams = agrs.slice(1);
  return function (...innerParam) {
    context.apply(agrs[0], [...innerParam, ...prams]);
  };
};

let display2 = seeScore.cutomBind(ground, 'test');
display2('USA');

// let newGround = Object.assign({}, ground);

let newGround = JSON.parse(JSON.stringify(ground));

console.log(ground);
newGround.scoreBoard = 10000;
newGround.pavilion.area = 'south';
console.log(newGround);
console.log(ground);

let curreny = new Map([
  [1, 'gold'],
  [2, 'silver'],
  [3, 'bronze'],
]);

//console.log(curreny.values());

// fibo series

function fiboSeries(num) {
  let n1 = 0;
  let n2 = 1;
  let nextTerm = 0;

  for (let i = 0; i <= num; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }

  console.log(nextTerm);
}

//fiboSeries(10);

//reverse num

function reverseNo(num) {
  let reve = 0;
  let temp = 0;

  while (num) {
    temp = num % 10;
    reve = reve * 10 + temp;
    num = Math.floor(num / 10);
  }

  //console.log(reve);
}

//reverseNo(10987654321);

// missing number in array

function findMiss(arrNum) {
  let n = arrNum.length;
  let total = ((n + 1) * (n + 2)) / 2;
  for (let i = 0; i < n; i++) {
    total = total - arrNum[i];
  }

  console.log('miss number', total);
}

// findMiss();

function setTimFun(num) {
  for (var i = 0; i <= num; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}

// setTimFun(10);

const testArr = [1, 2, 3, 4, 10, 300, 5, 30, 6];

// console.log(testArr.sort((a, b) => a - b));

// console.log(testArr.sort((a, b) => b - a));

Array.prototype.seeWords = function seeWords() {
  console.log(this);
};

testArr.seeWords();
