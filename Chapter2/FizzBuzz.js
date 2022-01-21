for (let n = 0; n < 100; n++) {
  let output = "";
  if(!(n % 3))output += "Fizz";
  if(!(n % 5))output += "Buzz";
  console.log(output || n);
}