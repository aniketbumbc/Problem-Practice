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
