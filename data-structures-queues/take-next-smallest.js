/* exported takeNextSmallest */

// psuedo code
// Second smallest number
// Compare two numbers
// first item compare to second item
// first item > second item, second item to be the first item
// second item to be the next item
// If second is bigger than the first, return the first item
// return the number if that number is less than the after
// -37 > -18 => -37 < -36 => -37

function takeNextSmallest(queue) {
  let first = queue.dequeue();
  let second = queue.peek();

  while (first > second) {
    queue.enqueue(first);
    first = queue.dequeue();
    second = queue.peek();
  }
  return first;
}
