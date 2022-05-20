/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {

  var firstChar = string.charAt(firstIndex);
  var secondChar = string.charAt(secondIndex);

  var newString = string.split('');
  newString[firstIndex] = secondChar;
  newString[secondIndex] = firstChar;

  const anotherString = newString.join('');
  return anotherString;
}
