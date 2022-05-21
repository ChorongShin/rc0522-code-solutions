/* exported isPalindromic */

function isPalindromic(string) {
  string = string.replace(/\s/g, '');
  var reversed = string.split('').reverse().join('');
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) !== reversed.charAt(i)) {
      return false;
    }
  }
  return true;
}

// if (string === reversed) {
//   return true;
// }
// return false;

isPalindromic('sam I am');
