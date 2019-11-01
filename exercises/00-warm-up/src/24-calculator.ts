export {};

function sum(arr: number[]): number {    
    return arr.reduce((a, b) => a + b);
}

function subtract(a: number, b: number): number {
    return a - b;
}

function add(a: number, b: number): number {
    return a + b;
}

function multiply(arr: number[]): number {    
    return arr.reduce((a, b) => a * b);
}

function power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
