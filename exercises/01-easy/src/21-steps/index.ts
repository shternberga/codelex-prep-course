/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n: number) {
    for (let i = 0; i < n; i++) 
    {
        let str = '';
        for (let k = 0; k < i+1; k++) {
          str = str + '#';
        }
        for (let z = 1; z < n-i; z++) {
            str = str + ' ';
          }
        console.log(str);
      }
}

export { steps };
