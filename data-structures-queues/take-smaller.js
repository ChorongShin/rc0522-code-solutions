/* exported takeSmaller */

function takeSmaller(queue) {
  let min = Infinity;

  if (queue.peek() === undefined) {
    return undefined;
  }

  const first = queue.dequeue();

  if (first !== undefined) {
    min = first;

  }

  const second = queue.dequeue();

  if (first < second) {
    queue.enqueue(second);
    min = first;

  } else if (first > second) {
    min = second;
    queue.enqueue(first);
  } else if (first === second) {
    min = first;
    queue.enqueue(first);
  }

  return min;
}

// function takeSmaller(queue) {
//   const first = queue.dequeue();
//   if (typeof first === 'undefined') {
//     return;
//   }

//   const next = queue.dequeue();
//   if (typeof next === 'undefined') {
//     return first;
//   }

//   if (first > next) {
//     queue.enqueue(first);
//     return next;
//   }

//   queue.enqueue(next);
//   return first;
// }
