function printNumber(num) {
  for (let i = 1; i <= num; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

printNumber(10);
