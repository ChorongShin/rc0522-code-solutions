/* exported isLowerCased */

// iterate over characters in the word
// check if character is not lowercased
// return false
// otherwise, return true

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
