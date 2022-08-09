/* exported take2nd */

function take2nd(queue) {
  const first = queue.dequeue();
  if (first === undefined) {
    return;
  }

  const second = queue.peek();
  queue.dequeue();
  queue.enqueue(first);
  return second;
}
