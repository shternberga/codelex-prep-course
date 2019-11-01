export {};

const repeatString = (str: string, times: number) => {
    let repeated = '';
    for (let i = 0; i < times; i++) {
        repeated = repeated.concat(str);
    }
    return repeated;
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
