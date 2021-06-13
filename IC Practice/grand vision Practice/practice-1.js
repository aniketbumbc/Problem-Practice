/**   Closure */
function mostOuter() {
  let outerMost = 'Hello Outer Most';
  function outer() {
    let outer = ' this is outer call';
    function inner() {
      let innerCall = ' Inner Call';
      console.log(outer, innerCall, ' ', outerMost);
    }
    inner();
  }
  outer();
}
mostOuter();
