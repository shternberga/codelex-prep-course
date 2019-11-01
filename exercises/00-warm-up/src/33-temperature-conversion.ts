export {};

/**
 * How to convert temperature -> https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature
 *
 * Create two functions fahrenheitToCelsius & celsiusToFahrenheit
 * 
 * Temperature should be rounded to one decimal place: i.e., fahrenheitToCelsius(100) should return 37.8 and not 37.77777777777778.
 */

const fahrenheitToCelsius = tempF => {
    let tempC = (tempF - 32) * (5 / 9);    
    return +tempC.toFixed(2);
}
const celsiusToFahrenheit = tempC => {
    let tempF = tempC * (9 / 5) + 32;    
    return +tempF.toFixed(2);
}

console.log(fahrenheitToCelsius(32)); // Expected result: 0
console.log(celsiusToFahrenheit(0)); // Expected result: 32
