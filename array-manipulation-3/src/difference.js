/* exported difference */

// create a storage for items that are not in the second list
// filter the items in the first list that are not in the second list
// create a storage for items that are not in the first list
// filter the items in the second list that are not in the first list
// combine the two storages and return the list with new items

function difference(first, second) {
  var notInSecond = first.filter(item => !second.includes(item));
  var notInFirst = second.filter(item => !first.includes(item));

  return notInSecond.concat(notInFirst);
}

// function difference(first, second) {
//   var concat = first.concat(second);
//   var arr = [];
//   for (var i = 0; i < concat.length; i++) {
//     if (arr.indexOf(concat[i]) !== -1) {
//       arr.splice(arr.indexOf(concat[i]), 1);
//     } else {
//       arr.push(concat[i]);
//     }
//   }
//   return arr;
// }
