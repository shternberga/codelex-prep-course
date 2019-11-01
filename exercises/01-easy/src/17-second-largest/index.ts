/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]) {
    let sorted = array.sort(function(a, b){return b - a});
    for (let index = 0; index < sorted.length; index++) {
        if (sorted[index] > sorted[index + 1]) 
        return sorted[index + 1] ;
    }
    return sorted[0];
}

export { secondLargest };
