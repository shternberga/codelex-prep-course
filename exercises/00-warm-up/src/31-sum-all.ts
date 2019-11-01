export {};

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

const sumAll = function(a: number, b: number): number {
    let sum: number;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};

console.log(sumAll(1, 4)); // Expected output: 10
