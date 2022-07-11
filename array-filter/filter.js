function filter(array, predicate) {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    const result = predicate(array[i], i, array);
    if (result) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}
