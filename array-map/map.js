function map(array, transform) {
  const mapArray = [];
  for (let i = 0; i < array.length; i++) {
    const result = transform(array[i], i, array);
    mapArray.push(result);
  }
  return mapArray;
}

// EXAMPLE
// const doubled = map(numbers, number => {
//   return number * 2
// });

// If we need index,
// const doubled = map(numbers, (number, index) {
//   return `${number * 2} is at index ${index}`
// })
