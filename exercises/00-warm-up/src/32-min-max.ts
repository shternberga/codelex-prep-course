export {};

const min = array => {
    return Math.min(...array);
};

const max = array => {
    let maxNumber = -Infinity;
    for (let i = 0; i <= array.length; i++) {
        if (maxNumber < array[i]) {
            maxNumber = array[i];
        }       
    }
    return maxNumber;
};

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
