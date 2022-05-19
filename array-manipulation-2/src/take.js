/* exported take */

// create a storage for a new array
// iterate over the array
// stop the iteration at the given count
// add the item to the new array
// return new array

function take(array, count) {
  if (array.length === 0) {
    return [];
  }
  var newArray = [];
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// if the array is empty, return empty array
// create a storage for a new array
// iterate over the array
// stop the iteration at the given count
// add the item to the new array
// return new array
