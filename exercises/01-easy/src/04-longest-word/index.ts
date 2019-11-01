/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string) {
   const senArr = sen.split(/[^\A-Z]/gi);
   let longestW = senArr[0];
   for (let i = 0; i < senArr.length - 1; i++) {
       if (senArr[i].length < senArr[i + 1].length) {
            longestW = senArr[i + 1];
       }       
   }
   for (let i = 0; i < senArr.length; i++) {
        if (senArr[i].length == longestW.length) 
        {
            return senArr[i];
        }       
   }
   return longestW;
}

export { longestWord };
