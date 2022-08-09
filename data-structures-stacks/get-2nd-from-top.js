/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return;
  }

  stack.pop();
  return stack.peek();
}
