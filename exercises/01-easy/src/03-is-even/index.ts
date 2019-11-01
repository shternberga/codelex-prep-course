import { isFlowBaseAnnotation } from "@babel/types";

/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

function isEven(n: number): boolean {
    // if (n == 0) return true;
    // else if (n == 1) return false;
    // else if (n < 0)  return isEven(-n);
    // else return isEven(n - 2);

    // let isEven = true; 
    // if (n < 0) n = -n;
        
    // for (let i = 1; i <= n; i++)  
    //     isEven = !isEven; 
            
    // return isEven; 

    const str = n.toString().split('.')[0];
    const lastStr = str.substr(str.length - 1);
    if (lastStr ==  "1"
        || lastStr ==  "3"
        || lastStr ==  "5"
        || lastStr ==  "7"
        || lastStr ==  "9") {
            return false;
        }
    return true;
}

export { isEven };
