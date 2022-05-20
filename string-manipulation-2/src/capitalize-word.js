/* exported capitalizeWord */
// lowercase all the letters of the word
// iterate over the lowercased word
// check if the word is javascript
// if so, change j and s to uppercase and rest of them to lowercase
// otherwise, change the first letter of the word to uppercase

function capitalizeWord(word) {
  var lowercasedWord = word.toLowerCase();
  for (var i = 0; i < lowercasedWord.length; i++) {
    if (lowercasedWord === 'javascript') {
      return lowercasedWord[0].toUpperCase() + lowercasedWord.slice(1, 4).toLowerCase() + lowercasedWord[4].toUpperCase() + lowercasedWord.slice(5).toLowerCase();
    }
  }
  return lowercasedWord[0].toUpperCase() + lowercasedWord.slice(1).toLowerCase();
}
