/* exported toObject */

// create a storage for an empty object literal
// assign the first item in the array to the key storage
// assign the second item in the array to the value storage
// put the key in the object and assign the value
// return the object

function toObject(keyValuePair) {
  var obj = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  obj[key] = value;
  return obj;
}
