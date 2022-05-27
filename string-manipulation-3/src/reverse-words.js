/* exported reverseWords */
// split the sentence into letters
// reverse the order of letters in those words
// put letters together
// split the sentence into words
// reverse the order of those words
// put words together into sentence
// return the sentence

function reverseWords(string) {
  var splitLetters = string.split('');
  var reverseLetters = splitLetters.reverse();
  var combineLetters = reverseLetters.join('');
  var splitWords = combineLetters.split(' ');
  var reverseWords = splitWords.reverse();
  var reversedSentence = reverseWords.join(' ');
  return reversedSentence;
}

// OR

// function reverseWords(string) {
//   return string.split('').reverse().join('').split(' ').reverse().join(' ');
// }
