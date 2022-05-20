/* exported firstChars */

// check if there is no sentence,
// if so, return empty string
// if the length of sentence is larger than the given length
// return the given length of sentence
// otherwise, return the same length of sentence

function firstChars(length, string) {
  if (string.length === 0) {
    return '';
  }

  if (string.length > length) {
    return string.slice(0, length);
  }
  return string;
}
