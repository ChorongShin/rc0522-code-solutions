/* exported compact */
// create a story for a new list
// go over the list of items
// if the item is not a falsy value such as 0, undefined, null or false
// add to the new list
// return the new list

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false && array[i] !== null && array[i] !== '' && array[i] !== undefined && array[i] !== 0 && !Number.isNaN(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// create a story for a new list
// go over the list of items
// if the item is not a falsy value such as 0, undefined, null or false, empty string, NaN in Number
// add to the new list
// return the new list
