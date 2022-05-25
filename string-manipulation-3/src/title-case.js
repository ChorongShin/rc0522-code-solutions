/* exported titleCase */

// iterate over the sentence
// check if length of word is less than 4,
// if so, lowercase those letters
// if not, capitalize the first word of the title and of any subtitle
// if the second part of the word is hypenated, capitalize it

function titleCase(title) {
  var words = title.toLowerCase().split(' ');
  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|v.?|vs.?|via)$/i;
  var alphanumericPattern = /([A-Za-z0-9\u00C0-\u00FF])/;

  return words.map(function (currentWord, index, array) {

    if (currentWord.includes('javascript')) {
      currentWord = currentWord[0].toUpperCase() + currentWord.slice(1, 4).toLowerCase() + currentWord[4].toUpperCase() + currentWord.slice(5).toLowerCase();
    }
    if (currentWord === 'api') {
      currentWord = currentWord.toUpperCase();
    }

    if (currentWord === 'node.js') {
      currentWord = currentWord[0].toUpperCase() + currentWord.substr(1).toLowerCase();
    }

    if (currentWord.includes('-')) {
      return currentWord.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-');
    }

    if (currentWord.search(smallWords) > -1 && index !== 0 && index !== array.length - 1) {
      return currentWord.toLowerCase();
    }

    // if () {
    //   currentWord += array[index + 1][0].toUpperCase() + array[index + 1].slice(1).toLowerCase();
    // }

    return currentWord.replace(alphanumericPattern, function (match) {
      return match.toUpperCase();
    });
  })
    .join(' ');
}

// function titleCase(title) {
//   var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|v.?|vs.?|via)$/i;
//   var alphanumericPattern = /([A-Za-z0-9\u00C0-\u00FF])/;
//   var wordSeparators = /([ :–—-])/;

//   return title.split(wordSeparators)
//     .map(function (current, index, array) {
//       if (
//         /* Check for small words */
//         current.search(smallWords) > -1 &&
//         /* Skip first and last word */
//         index !== 0 &&
//         index !== array.length - 1 &&
//         /* Ignore title end and subtitle start */
//         array[index - 3] !== ':' &&
//         array[index + 1] !== ':' &&
//         /* Ignore small words that start a hyphenated phrase */
//         (array[index + 1] !== '-' ||
//           (array[index - 1] === '-' && array[index + 1] === '-'))
//       ) {
//         return current.toLowerCase();
//       }

//       /* Ignore intentional capitalization */
//       if (current.substr(1).search(/[A-Z]|\../) > -1) {
//         return current;
//       }

//       /* Ignore URLs */
//       if (array[index + 1] === ':' && array[index + 2] !== '') {
//         return current;
//       }

//       /* Capitalize the first letter */
//       return current.replace(alphanumericPattern, function (match) {
//         return match.toUpperCase();
//       });
//     })
//     .join('');
// }

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
