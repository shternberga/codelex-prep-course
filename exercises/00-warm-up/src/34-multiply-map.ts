export {};

/**
 * Implement map function which works similarly as https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

const map = (array: any[], func): any[] => {
  var mapped = [];
  for (let i = 0; i < array.length; i++){
    mapped.push(func(array[i]));
  }
  return mapped;
};

const numbers = [1, 2, 3];
const doubled = map(numbers, function(number) {
  return number * 2;
});
console.log(doubled); // Expected result: [2, 4, 6]
