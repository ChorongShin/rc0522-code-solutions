/* exported equal */

function equal(first, second) {
  if (first.length === 0 && second.length === 0) {
    return true;
  }
  if (first.length !== second.length) {
    return false;
  }

  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
