export {};

const letters = ["a", "n", "c", "e", "z", "f"];
let sortedLetters = letters.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  }); // You are allowed to change only this line

console.log(sortedLetters); // Expected output: [ 'a', 'c', 'e', 'f', 'n', 'z' ]
