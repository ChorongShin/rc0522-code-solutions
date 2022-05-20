/* exported lastChars */

// check if there is no sentence,
// if so, return empty string
// if the length of sentence is larger than the given length
// return the given the last length of charcter of the sentence
// otherwise, return the same length of sentence
function lastChars(length, string) {
  if (string.length === 0) {
    return '';
  }

  if (string.length > length) {
    return string.slice(string.length - length);
  }
  return string;
}
