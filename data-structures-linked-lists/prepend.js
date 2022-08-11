/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const newHead = new LinkedList(value);
  newHead.next = list;
  return newHead;
}
