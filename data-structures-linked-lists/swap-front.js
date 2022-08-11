/* exported swapFront */

function swapFront(list) {
  // If there is no second node, return original list
  if (list.next === null) {
    return list;
  }

  const secondNode = list.next;
  const thirdNode = list.next.next;
  secondNode.next = list;
  secondNode.next.next = thirdNode;
  return secondNode;
}
