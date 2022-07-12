function reduce(array, reducer, initialValue) {

  for (let i = 0; i < array.length; i++) {
    const result = reducer(array[i], array[i + 1], array);
    initialValue += result;
  }
  return initialValue;
}

// const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const accountOne = [
//   { type: 'deposit', amount: 150 },
//   { type: 'deposit', amount: 20 },
//   { type: 'withdrawal', amount: 5 },
//   { type: 'deposit', amount: 100 },
//   { type: 'withdrawal', amount: 25 },
//   { type: 'withdrawal', amount: 60 }
// ];

// const sum = numbers.reduce((total, current) => {
//   return total + current;
// }, 0);

// First Example
// const add = (x, y) => {
//   console.log('X', x);
//   console.log('Y', y);
//   console.log('--------------------');
//   return x + y;
// };
// const sumThree = numbersTwo.reduce(add, 0);
// console.log(sumThree);

// Second Example
// const net = (balance, transaction) => {
//   console.log('balance:', balance);
//   console.log('transaction:', transaction);
//   console.log('----------------');
//   if (transaction.type === 'deposit') {
//     return balance + transaction.amount;
//   }
//   return balance - transaction.amount;
// };
// const balancedOne = accountOne.reduce(net, 0);
// console.log(balancedOne);
