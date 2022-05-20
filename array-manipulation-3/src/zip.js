/* exported zip */

function zip(first, second) {
  var newArray = [];
  if (first.length > second.length) {
    for (var i = 0; i < first.length - 1; i++) {
      newArray.push([first[i], second[i]]);
    }
  } else {
    for (i = 0; i < first.length; i++) {
      newArray.push([first[i], second[i]]);
    }
  }

  return newArray;
}
