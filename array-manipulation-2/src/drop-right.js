/* exported dropRight */
// check if the length of array is zero,
// if so, return the empty array
// create a storage for a new array
// iterate over the array until the number of items minus the count
// add the item to the new array
// return the new array

function dropRight(array, count) {
  if (array.length === 0) {
    return [];
  }

  var newArray = [];
  for (var i = 0; i <= array.length - 1 - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
