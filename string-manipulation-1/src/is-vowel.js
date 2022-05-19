/* exported isVowel */

// create a storage for a list of vowels
// iterate over the list of vowels
// check if the character is strictly equal to any vowels
// if so, return true
// otherwise, return false

function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === char) {
      return true;
    }
  }
  return false;
}
