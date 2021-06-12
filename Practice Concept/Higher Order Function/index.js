const radius = [4, 5, 2, 6];

const areaCalculate = (radius) => {
  return Math.PI * radius * radius;
};

const diameterCircle = (radius) => {
  return radius * radius;
};

const calculate = (radius, logic) => {
  let output = [];
  for (let numRadius of radius) {
    output.push(logic(numRadius));
  }
  return output;
};

const addition = (num) => num + num;

//console.log(radius.map(addition));

//console.log('Area ---- ', calculate(radius, areaCalculate));
//console.log('Diameter ---- ', calculate(radius, diameterCircle));

/**
 *  Object Shallow vs Deep
 */

var userName = {
  name: 'Bunny',
  age: 30,
  designation: 'Developer',
  address: {
    street: 'Baltimore',
    city: 'MD',
  },
};

console.log(userName);

// userName.address.city = 'NYC';
// userName.name = 'Mike';

const newObj = Object.assign({}, userName);

newObj.address = { ...userName.address };
newObj.address.city = 'NYC';
newObj.name = 'Mike';

//console.log('New Obj..', newObj);

/**
 * Closurse
 */

var x = 30;

function outerFun() {
  let z = 10;

  function innerFun() {
    let y = 20;
    console.log(x * y * z);
  }

  innerFun();
}
outerFun();
console.log();

// print 1,2,3,4,5 in seconds

function counter() {
  for (var i = 1; i <= 5; i++) {
    function innerCounter(i) {
      setTimeout(function () {
        console.log(z);
      }, i * 1000);
    }
    innerCounter(i);
  }

  console.log('Take JS');
}
counter();
