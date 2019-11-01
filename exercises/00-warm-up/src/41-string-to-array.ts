export {};

const stringToArray = (strArr: string[]) => {
    let result = [];    
    for (let i = 0; i < strArr.length; i++){
        result = strArr[i].split(' ');
    }
    return result;
};

console.log(stringToArray(["John Doe"])); // Expected output: ['John', 'Doe']
