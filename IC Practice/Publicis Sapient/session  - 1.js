var name = 'Bunny';

function test() {
  var name = 'new bunny';
  console.log(name);
}

console.log(name);

test();

(function () {
  var name = 'Bunny';
  function test2() {
    console.log(name);
  }
  test2();
})();

let getData = function (data) {
  this.data = data;
};

getData.prototype.student = function () {
  console.log(this.data);
};

let s1 = new getData(234);

s1.student();

let fun = function () {
  (function () {
    let l = 'let';
    var v = 'var';
  })();

  console.log(l);
  console.log(v);
};

fun();
