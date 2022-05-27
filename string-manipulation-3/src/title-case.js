/* exported titleCase */

var isColon = false;

function titleCase(title) {
  var words = title.toLowerCase().split(' ');
  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|v.?|vs.?|via)$/i;
  var colon;

  for (var i = 0; i < words.length; i++) {
    if (words[i].includes(':')) {
      colon = words[i];
    }
  }

  var colonIndex = words.indexOf(colon);

  return words.map(function (currentWord, index, array) {

    if (index === colonIndex + 1) {
      return array[index][0].toUpperCase() + array[index].slice(1).toLowerCase();

    }

    if (currentWord.includes('javascript')) {
      return currentWord[0].toUpperCase() + currentWord.slice(1, 4).toLowerCase() + currentWord[4].toUpperCase() + currentWord.slice(5).toLowerCase();
    }
    if (currentWord === 'api') {
      return currentWord.toUpperCase();
    }

    if (currentWord.includes('-')) {
      return currentWord.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-');
    }

    if (currentWord.search(smallWords) > -1 && index !== 0 && currentWord.length <= 3) {
      return currentWord.toLowerCase();
    }

    if (!isColon) {
      return currentWord[0].toUpperCase() + currentWord.substr(1).toLowerCase();
    }
    return false;

  }).join(' ');
}

// function titleCase(title) {
//   var words = title.toLowerCase().split(' ');

//   var minor = ['a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'not', 'and', 'but', 'or'];
//   // var firstWord = ['a', 'an', 'the'];
//   var array = [];
//   for (var i = 0; i < words.length; i++) {
//     if (words[i] === 'javascript' || words[i] === 'javascript:') {
//       array.push(words[i][0].toUpperCase() + words[i].slice(1, 4).toLowerCase() + words[i][4].toUpperCase() + words[i].slice(5).toLowerCase());
//     } else if (words[i] === 'api') {
//       array.push(words[i].toUpperCase());
//     } else if (minor.includes(words[i])) {
//       array.push(words[i].toLowerCase());
//     } else if (words[i].includes('-')) {
//       array.push(words[i].split('-').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join('-'));
//     } else {
//       array.push(words[i][0].toUpperCase() + words[i].substr(1).toLowerCase());
//     }
//   }
//   return array.join(' ');
// }
