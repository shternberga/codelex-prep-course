/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(str: string)  {

    let obj: any = {};
    let arrayOfWords = str.toLowerCase().replace(/\s+$/, '').replace(/^\s+/, '').split(/\s+/);
    
    arrayOfWords.forEach(function(word: string){

      if (!obj.hasOwnProperty(word) && word.length > 0){
        obj[word] = 1;
      } else {
        obj[word]++;
      }
    });
    return obj;
  }
}

export { Words };


