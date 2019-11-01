/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number) {
    let result = 0;
    if (int < 0) {
        result = -parseFloat(int.toString().replace('-', '').split('').reverse().join('')) * 1;
    } else result = parseFloat(int.toString().split('').reverse().join('')) * 1;
    return  result;
}

export { reverse };
