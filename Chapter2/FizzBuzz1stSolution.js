for (let i = 1; i <= 100; i++) {
  if (!(i % 3) && !(i % 5)) {
    console.log("FizzBuzz");
    continue;
  } else if (i % 3 && i % 5) {
    console.log(i);
    continue;
  }
  if (!(i % 3)) {
    console.log("Fizz");
  }
  if (!(i % 5)) {
    console.log("Buzz");
  }
}
