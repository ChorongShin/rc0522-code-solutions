/* exported union */

// create a storage for combined items from two lists
// iterate over the items
// if the list of items have the same items,
// return the list without duplicates.

function union(first, second) {
  var array = first.concat(second);
  return array.filter((item, index, newArray) => {
    return newArray.indexOf(item) === index;
  });
}

// OR

// function union(first, second) {
//   return [...new Set([...first, ...second])];
// }
