function countBs(word) {
  return compare(word, "B");
}

function countChar(word, char) {
  return compare(word, char);
}

function compare(word, char) {
  let counter = 0;
  for (let index = 0; index <= word.length - 1; index++) {
    if (word[index] == char) {
      counter += 1;
    }
  }
  return counter;
}
console.log(countBs("BBs"));
console.log(countChar("Edgar Ubaldo Morales Cortes", "o"));
