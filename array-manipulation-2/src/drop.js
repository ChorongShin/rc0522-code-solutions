/* exported drop */
// check if the array is empty
// return the empty array literal
// create a storage for a new array
// iterate over the array
// start from the given count
// add the item to the new array
// return new array

function drop(array, count) {
  if (array.length === 0) {
    return [];
  }

  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
