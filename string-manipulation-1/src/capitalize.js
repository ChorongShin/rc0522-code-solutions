/* exported capitalize */

// change the first character to be uppercased
// change the rest of characters to be lowercased.

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
