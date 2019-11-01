export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */


function protectEmail(email: string): string {
     return email.substr(0, 3).concat('...').concat(email.substr(email.indexOf("@")));;
} 
console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
