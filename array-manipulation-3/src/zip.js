/* exported zip */

// create a storage for a new list
// check if the first list of items are longer than the second list of items
// if so, check the difference between number of items in the first list and number of items in the second list
// iterate over items until the number of items' difference
// and add each item of the lists into the new list

// if not, add each item into the new list until the first list of itmes are all added
// return the new list

function zip(first, second) {
  var newArray = [];
  if (first.length > second.length) {
    var difference = first.length - second.length;
    for (var i = 0; i < first.length - difference; i++) {
      newArray.push([first[i], second[i]]);
    }
  } else {
    for (i = 0; i < first.length; i++) {
      newArray.push([first[i], second[i]]);
    }
  }

  return newArray;
}
