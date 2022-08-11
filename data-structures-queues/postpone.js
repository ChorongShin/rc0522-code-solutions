/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) return;
  const front = queue.dequeue();
  return queue.enqueue(front);
}

// if (typeof queue.peek() === 'undefined') return;
// queue.enqueue(queue.dequeue())
// type of the return value of the calling peek method of queue object is strictly undefined
// enqueue method of queue object is being called with one argument return value of calling dequeue method of queue object
