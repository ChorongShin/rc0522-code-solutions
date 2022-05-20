/* exported getValues */

// create a storage for an empty array
// iterate over the object
// access the key in the object
// add the value to the array
// return the array

function getValues(object) {
  var values = [];
  for (var property in object) {
    values.push(object[property]);
  }
  return values;
}
