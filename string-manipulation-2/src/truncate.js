/* exported truncate */

// create a storage for an empty string
// check if the length of the string is longer than the given length,
// if so, cut it with an ellipsis(...) and add it to the empty string
// otherwise, return original string with ellipsis

function truncate(length, string) {
  var newString = '';
  if (string.length > length) {
    newString += string.slice(0, length) + '...';
    return newString;
  }
  return string + '...';
}
