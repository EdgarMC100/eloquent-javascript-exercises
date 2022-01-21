let board = '';
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    if (!((row + col) % 2)) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += '\n';
}
console.log(board);