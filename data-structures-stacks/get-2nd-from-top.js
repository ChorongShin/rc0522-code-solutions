/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const top = stack.pop();
  if (top === undefined) {
    return;
  }
  const second = stack.peek();
  stack.push(top);
  return second;
}
