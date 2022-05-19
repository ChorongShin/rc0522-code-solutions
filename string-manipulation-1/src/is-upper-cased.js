/* exported isUpperCased */

// iterate over characters in the word.
// check if the character is not uppercased,
// return false
// otherwise, return true

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
