import { switchCase } from "@babel/types";

/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string) {
    return (s.match(/[aeiou]/gi) || []).length;
}

export { vowels };
