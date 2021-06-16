console.log('IIFE');
var name = 'aniket';

function test() {
  var name = ' bunny';
  console.log(name);
}

test();

(function () {
  var name = 'IIFE';
  function test() {
    console.log('name', name);
  }
  test();
})();
