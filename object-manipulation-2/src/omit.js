/* exported omit */
function omit(source, keys) {
  var result = {};

  for (var property in source) {
    if (!keys.includes(property)) {

      result[property] = source[property];
    }
  }

  return result;
}

// create storage for new data
// iterate over the given data and access to the property
// if the given data does not have the same key as the given keys,
// assign the property that is not included in the data to new data
// return data
