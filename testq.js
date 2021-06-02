//multiply(5)(6);

function multiply(a) {
  return (b) => {
    return a * b;
  };
}

multiply(5)(6);

let obj = {
  x: 1,

  getX() {
    function inner() {
      console.log(this.x);
    }

    inner();
  },
};

obj.getX();

obj.bind(inner());
