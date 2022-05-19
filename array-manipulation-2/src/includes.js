/* exported includes */

// iterate over the array
// check if the array has given value
// if so, return true;
// otherwise, return false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
