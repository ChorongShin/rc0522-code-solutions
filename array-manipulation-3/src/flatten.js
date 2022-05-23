/* exported flatten */

// create a storage for items
// return the storage adding other items

function flatten(array) {
  var newArray = [];
  return newArray.concat(...array);
}

// OR
// const flatten = array => array.reduce((acc, val) => acc.concat(val), []);
