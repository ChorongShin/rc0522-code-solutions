/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const nextList = list.next;
  list.next = new LinkedList(value);
  if (nextList !== null) {
    list.next.next = nextList;
  }
}
