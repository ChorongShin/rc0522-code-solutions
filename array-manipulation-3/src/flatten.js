/* exported flatten */

// function flatten(array) {
//   return [].concat(...array);
// }

const flatten = array => array.reduce((acc, val) => acc.concat(val), []);
