/* exported getWords */

// if the string have the empty string,
// add the string to the array

function getWords(string) {
  if (string.length === 0) {
    return [];
  }
  return string.split(' ');
}

// if the string does not have a word,
// return the empty array
// split the string by space.
