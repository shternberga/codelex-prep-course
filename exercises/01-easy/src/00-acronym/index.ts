/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
    let inputArr = input.split(/-| |_/);
    let result = '';
    for (let index = 0; index < inputArr.length; index++) {
        result = result.concat(inputArr[index].charAt(0).toUpperCase());
    }
    return result;
}

export { parse };
