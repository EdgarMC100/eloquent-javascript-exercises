let n = 5;
let chars = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (!((i + j) % 2)) {
      chars += " ";
    } else {
      chars += "#";
    }
  }
  chars += "\n";
}
console.log(chars);
