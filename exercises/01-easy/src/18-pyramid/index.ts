/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number) {
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 1; j < n-i; j++) {
          str = str + ' ';
        }
        for (let k = 1; k <= (2*i+1); k++) {
          str = str + '#';
        }
        for (let z = 1; z < n-i; z++) {
            str = str + ' ';
          }
        console.log(str);
      }
}

export { pyramid };
