/* exported chunk */
// check if there is not item in the list
// if so, return the empty array
// create a storage for an empty array
// iterate over the array
// slice the array by the given size
// add the sliced array into the new array
// return the new array

function chunk(array, size) {
  if (array.length === 0) {
    return [];
  }

  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    var splitedArray = array.slice(i, i + size);
    newArray.push(splitedArray);
  }
  return newArray;
}
