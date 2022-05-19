/* exported takeRight */

// check if the array is empty
// if so, return empty array
// create a storage for an empty array
// start with the given count from the back
// add the item to the new array
// return new array

function takeRight(array, count) {
  if (array.length === 0) {
    return [];
  }

  if (array.length < count) {
    return array;
  }

  var newArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// check if the array is empty
// if so, return empty array
// check if the count is larger than list of items
// if so, return the origial array
// create a storage for an empty array
// start with the given count subtracted by the number of items
// add the item to the new array
// return new array
