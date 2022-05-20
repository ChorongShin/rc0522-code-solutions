/* exported unique */

// copy the original list
// if the list of items have the same items,
// add only one item.

function unique(array) {
  return array.filter((item, index, newArray) => {
    return newArray.indexOf(item) === index;
  });
}
