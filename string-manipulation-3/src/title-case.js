/* exported titleCase */

// iterate over the sentence
// check if length of word is less than 4,
// if so, lowercase those letters
// if not, capitalize the first word of the title and of any subtitle
// if the second part of the word is hypenated, capitalize it

function titleCase(title) {
  var words = title.toLowerCase().split(' ');

  var minor = ['a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'not', 'and', 'but', 'or'];
  // var firstWord = ['a', 'an', 'the'];
  var array = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i] === 'javascript' || words[i] === 'javascript:') {
      array.push(words[i][0].toUpperCase() + words[i].slice(1, 4).toLowerCase() + words[i][4].toUpperCase() + words[i].slice(5).toLowerCase());
    } else if (words[i] === 'api') {
      array.push(words[i].toUpperCase());
    } else if (minor.includes(words[i])) {
      array.push(words[i].toLowerCase());
    } else if (words[i].includes('-')) {
      array.push(words[i].split('-').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join('-'));
    } else {
      array.push(words[i][0].toUpperCase() + words[i].substr(1).toLowerCase());
    }
  }
  return array.join(' ');
}
