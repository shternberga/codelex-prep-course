export {};

function concatenate(firstWord, secondWord, thirdWord) {
  return firstWord.concat(' ').concat(secondWord, ' ').concat(thirdWord );
}

const result = concatenate("Hello", "from", "CODELEX");
console.log(result); // Expected output: "Hello from CODELEX"
