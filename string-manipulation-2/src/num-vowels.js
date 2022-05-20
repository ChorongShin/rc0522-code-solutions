/* exported numVowels */

function numVowels(string) {
  if (string.length === 0) {
    return 0;
  }

  var words = string.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  for (var i = 0; i < words.length; i++) {
    if (vowels.includes(words[i])) {
      count++;
    }
  }
  return count;
}
