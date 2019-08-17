let biggest;

function findLongestWord(string) {
  let divided = string.split(' ');
  let unchecked = 0;
  
  for (let i = 0; i < divided.length; i += 1) {     
    if (unchecked < divided[i].length) {
      unchecked = divided[i].length;
      biggest = divided[i];
    }  
  }  
  return biggest;
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));