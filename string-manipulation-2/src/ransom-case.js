/* exported ransomCase */
// iterate over the character
// if the character is in the odd number
// change it to the lowercase
// otherwise change the character to the uppercase

function ransomCase(string) {
  var currentWord = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      currentWord += string[i].toLowerCase();
    } else {
      currentWord += string[i].toUpperCase();
    }
  }
  return currentWord;
}

// create a storage for a current word
// iterate over the word
// if the letter is in the even number,
// capitalize the letter and add to the current word
// otherwise, lowercase the letter and add to the current word
// return the current word.
