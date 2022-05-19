/* exported initial */

// create a storage for a new list
// iterate over the new list except the last item
// add the items to the new list
// return the new list

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
