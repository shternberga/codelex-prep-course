export {};

function truncateString(str: string, index: number): string {
    return str.substr(0, index);
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
