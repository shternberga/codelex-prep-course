export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 * Find a way to add 1% to all currency conversions (think about the DRY (don't repeat yourself) principle)
 */

// You are allowed to change this function
function convertToUSD(price: number): number {
    let usd = price * 1.4;
    return +fee(usd).toFixed(2);
}
// You are allowed to change this function
function convertToBRL(price: number): number {
    let brl = price * 4.5265;
    return +fee(brl).toFixed(2);
}

function fee(price: number): number {
    return price + (price * 0.01);
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToUSD(price);
const priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/