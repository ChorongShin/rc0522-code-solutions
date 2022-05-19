/* exported tail */

// create a storage for new list
// iterate over the list of items starting from second item
// add to the new list
// return the new list

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
