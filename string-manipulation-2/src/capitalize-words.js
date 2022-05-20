/* exported capitalizeWords */

// create a storage for current sentence
// split the sentence by the space
// iterate over the list of word
// change the first letter of the word to uppercase and the rest to lowercase
// combine words together

function capitalizeWords(string) {
  var words = string.split(' ');

  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
  }
  return words.join(' ');
}
