/* exported countdown */
function countdown(number) {
  var numbers = [];
  var zero = 0;
  while (number >= zero) {
    numbers.push(number);
    number--;
  }
  return numbers;
}
