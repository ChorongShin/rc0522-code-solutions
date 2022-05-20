/* exported getKeys */

// create a storage for an empty array
// iterate over the object
// add the key to the array
// return the array

function getKeys(object) {
  var keys = [];
  for (var property in object) {
    keys.push(property);
  }
  return keys;
}
