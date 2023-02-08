/* exported removeNext */

function removeNext(list) {
  const secondNode = list.next;
  if (secondNode === null) return;
  const thirdNode = secondNode.next;
  list.next = thirdNode;
}
