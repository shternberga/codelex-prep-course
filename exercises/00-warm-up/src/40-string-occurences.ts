export {};

const count = (str: string, exp: string) => {
    let regExp = new RegExp(exp,"gi"); 
    return str.match(regExp).length;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
