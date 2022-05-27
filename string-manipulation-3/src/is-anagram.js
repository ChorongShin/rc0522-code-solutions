/* exported isAnagram */

// make a helper function that removes all the space and sort letters in alphabetical order
// compare two strings by applying the helper function
// check if two strings are the same,
// if so, return true
// otherwise return false

function isAnagram(firstString, secondString) {
  return newAssortedString(firstString) === newAssortedString(secondString);
}

function newAssortedString(str) {
  return str.replace(/\s/g, '').split('').sort().join('');
}
