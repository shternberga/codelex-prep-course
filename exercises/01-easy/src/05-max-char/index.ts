/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */


function maxChar(str: string): string {
    let counter = 0;
    let char = '';
    let arrStr = str.split('');
    arrStr.forEach(ch_element => {
        if(str.split(ch_element).length > counter) {
            char = ch_element;
        }
    });
    return char;

    
}

export { maxChar };
