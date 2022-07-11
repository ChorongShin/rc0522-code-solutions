function map(array, transform) {
  const mapArray = [];
  for (let i = 0; i < array.length; i++) {
    const result = transform(array[i], i, array);
    if (result) {
      mapArray.push(array[i]);
    }
  }
  return mapArray;
}
