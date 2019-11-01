export {};

function isOdd(num: number): boolean { 
    return num % 2 === 1; 
}

function goThroughNumbers(start: number, end: number): void {
    if (start<=end){
        for (let i = start; i <= end; i++) {
            if (isOdd(i)) {
                console.log (`> ${i} - odd`);
            } else {
                console.log (`> ${i} - even`);
            }
        }
    } else {
        console.log (`invalid input`);
    } 

}

goThroughNumbers(3, 7);
/* Expected output:

    > 3 - odd
    > 4 - even
    > 5 - odd
    > 6 - even
    > 7 - odd

*/

goThroughNumbers(8, 12);
/* Expected output:

    > 8 - even
    > 9 - odd
    > 10 - even
    > 11 - odd
    > 12 - even

*/

goThroughNumbers(4, 3);
// Expected output: 'invalid input'
