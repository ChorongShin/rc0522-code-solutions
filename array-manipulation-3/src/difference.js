/* exported difference */

// function difference(first, second) {
//   var newArray = [];
//   for (var i = 0; i < first.length; i++) {
//     if (first[i] !== second[i]) {
//       newArray.unshift(first[i]);
//       newArray.push(second[i]);
//     }
//   }
//   return newArray;
// }

function difference(first, second) {
  var concat = first.concat(second);
  var arr = [];
  for (var i = 0; i < concat.length; i++) {
    if (arr.indexOf(concat[i]) !== -1) {
      arr.splice(arr.indexOf(concat[i]), 1);
    } else {
      arr.push(concat[i]);
    }
  }
  return arr;
}
