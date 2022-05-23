/* exported intersection */

// create a storage for a new list
// filter the first list of items that have the same items as the second list
// return the new list

function intersection(first, second) {
  var intersectionItems = first.filter(item => second.includes(item));
  return intersectionItems;
}

// OR
// function intersection(first, second) {
//   var array = second.concat(first);
//   return array.filter((item, index, newArray) => {
//     return newArray.indexOf(item) !== index;
//   });
// }
