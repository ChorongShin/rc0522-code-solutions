/* exported isEmpty */

function isEmpty(stack) {
  if (stack.peek() === undefined) {
    return true;
  }
  return false;
}

// return typeof stack.peek() === undefined
// OR
// return stack.peek() === undefined
