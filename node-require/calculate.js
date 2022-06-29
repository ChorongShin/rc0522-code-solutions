const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

let result;
if (process.argv[3] === 'plus') {
  result = add(parseInt(process.argv[2], 10), parseInt(process.argv[4], 10));
} else if (process.argv[3] === 'minus') {
  result = subtract(parseInt(process.argv[2], 10), parseInt(process.argv[4], 10));
} else if (process.argv[3] === 'over') {
  result = divide(parseInt(process.argv[2], 10), parseInt(process.argv[4], 10));
} else if (process.argv[3] === 'times') {
  result = multiply(parseInt(process.argv[2], 10), parseInt(process.argv[4], 10));
}

console.log('Result:', result);
