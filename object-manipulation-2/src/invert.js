/* exported invert */

// create a storage for new data
// iterate over the given data
// change the value to the key and key to the value in a new data
// return data

function invert(source) {
  var obj = {};
  for (var property in source) {
    obj[source[property]] = property;
  }
  return obj;
}
