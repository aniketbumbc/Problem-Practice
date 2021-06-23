let student = {
  name: 'Bunny',
  class: 'SSC',
};

let print = function (city, homeTown, fakeId) {
  console.log(
    this.name + '  ' + this.class,
    ' ' + city,
    '' + homeTown,
    '' + fakeId
  );
};

let bindPrint = print.bind(student, 'New York');
bindPrint('Texas', 'dfdf');

/**
 * Polyfill bind
 */

Function.prototype.mybind = function (...args) {
  let context = this;
  let params = args.slice(1);
  return function (...innerArgs) {
    context.apply(args[0], [...params, ...innerArgs]);
  };
};

let polyBindPrint = print.mybind(student, 'Baltimore');
polyBindPrint('Texas', 'fdf');

// curring

let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

console.log(sum(1)(2)(3)(4)());

function curring(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curring(1)(2)(3));
