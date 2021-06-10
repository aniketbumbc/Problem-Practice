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

console.log(radius.map(addition));

console.log('Area ---- ', calculate(radius, areaCalculate));
console.log('Diameter ---- ', calculate(radius, diameterCircle));
