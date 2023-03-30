let word = 'tryber';
let reverseWord = '';


// for (let index = 0; index < word.length; index += 1) {
//   reverseWord.unshift(word[index]);
// }

// for(let letter = 0;letter < reverseWord.length; letter += 1) {
//   toReverse = toReverse + reverseWord[letter]
// }

reverseWord = word.split('').reverse().join('');
console.log(reverseWord);
