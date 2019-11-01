export {};

const removeFromArray = function(arr: number[], ...numbers: number[]): number[] {
   return arr.filter(num => {
                for (let i = 0; i < numbers.length; i++) {
                    if (num === numbers[i]){
                        return false;
                    }
                } 
                return true;
                });
            };

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]
