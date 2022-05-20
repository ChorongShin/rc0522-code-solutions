/* exported pick */

function pick(source, keys) {
  var obj = {};
  for (var property in source) {
    for (var i = 0; i < keys.length; i++) {
      if (property === keys[i]) {
        if (source[property] !== undefined) {
          obj[property] = source[property];
        }
      }
    }
  }
  return obj;
}

// create a storage for an object literal
// iterate over the given object
// iterate over the given keys
// check if the property in object matches to the keys
// and check if the property in given object is defined
// if so, add the property to the new object
// return the object
