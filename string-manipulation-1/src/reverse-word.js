/* exported reverseWord */

// create a storage for an empty string
// iterate over the characters in the word
// add string from the last character to the first character
// return the string

function reverseWord(word) {
  var reverseWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  return reverseWord;
}
