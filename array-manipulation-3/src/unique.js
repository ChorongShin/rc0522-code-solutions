/* exported unique */

// go through the items in the list
// if the list of items have the same items,
// return the list without duplicates.

function unique(array) {
  return array.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });
}
