function countBs(word) {
  // const wordLength = word.length - 1;
  let bs = 0;
  console.log(word);
  for (let i = 0; i < word; i++) {
    console.log(word[i])
    if (word[i] === 'B') {
      bs += 1;
    }
  }
  return bs
}

console.log(countBs('loBe BeBe'))

function countChar(word, char) {
  // const wordLength = word.length - 1;
  let counterChars = 0;
  for (let i = 0; i < word; i++) {
    if (word[i] === char) {
      counterChars += 1;
    }
  }
  return counterChars;
}

console.log(countChar('Edgar Ubaldo Morales Cortes', 'o'));