/* exported take2nd */

function take2nd(queue) {
  const first = queue.peek();

  if (first === undefined) {
    return undefined;
  }

  queue.dequeue();
  queue.enqueue(first);
  const second = queue.dequeue();
  return second;

}
