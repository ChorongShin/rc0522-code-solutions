/* exported reverse */

// create a storage for a new list
// start the list of items from the back to the front
// add the item to the new list
// return the new list

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

// create a storage for a new list
// start the list of items from the back to the front including the first item number
// add the item to the new list
// return the new list
