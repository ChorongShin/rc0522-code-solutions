const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((total, current) => {
  return total + current;
}, 0);

console.log('sum:', sum);

const product = numbers.reduce((total, current) => {
  return total * current;
}, 1);

console.log('product:', product);

const balance = account.reduce((total, current) => {

  if (current.type === 'deposit') {
    total += current.amount;
  } else if (current.type === 'withdrawal') {
    total -= current.amount;
  }
  return total;
}, 0);

console.log('balance:', balance);

const composite = traits.reduce((total, current) => {
  return total.concat(current);
}, []);

console.log('composite:', composite);
