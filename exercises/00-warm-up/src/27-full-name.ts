export {};

/**
 * Create a function called fullName, which concatenates two strings together
 */
function fullName(str1: string, str2: string): string {
    return str1.concat(" ", str2);
}

console.log(fullName("John", "Doe")); //Expected output: 'John Doe'
